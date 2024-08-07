import { getRolesCode } from "@/Utils";
import { ApiError } from "@/Utils/ApiError";
import { ApiResponse } from "@/Utils/ApiResponse";
import { asyncHandler } from "@/Utils/asyncHandler";
import { sendVerificationEmail } from "@/Utils/emailHandler";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import crypto from "crypto";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request, res: NextApiResponse) {
  return asyncHandler(async () => {
    const body = await request.json();
    if (
      body.firstName &&
      body.lastName &&
      body.orgName &&
      body.email &&
      body.password &&
      body.confirmPassword
    ) {
      if (body.password !== body.confirmPassword) {
        throw new ApiError(400, "Passwords don't match");
      }
      const hashedPassword = await hash(body.password, 10);

      const existingEmail = await db.users.findUnique({
        where: { email: body.email },
      });

      if (existingEmail) {
        throw new ApiError(400, "Email already exists");
      }

      const register = await db.users.create({
        data: {
          email: body.email,
          password: hashedPassword,
          firstName: body.firstName,
          lastName: body.lastName,
        },
      });

      if (!register.id) {
        throw new ApiError(400, "Unable to create user");
      }

      const organizations = await db.organizations.create({
        data: {
          name: body.orgName,
          createdById: register.id,
        },
      });

      await db.organizationsUsers.create({
        data: {
          usersId: register.id,
          organizationsId: organizations.id,
          isActive: true,
        },
      })

      const verificationToken = crypto.randomBytes(20).toString("hex");
      const registerVerificationToken = crypto
        .createHash("sha256")
        .update(verificationToken)
        .digest("hex");

      const verificationTokenExpires = (Date.now() + 7200000).toString();
      register.verificationToken = registerVerificationToken;
      register.verificationTokenExpiry = verificationTokenExpires;

      await db.users.update({
        where: {
          email: body.email,
        },
        data: {
          verificationToken: verificationToken,
          verificationTokenExpiry: verificationTokenExpires,
        },
      });

      if (!register.id) {
        throw new ApiError(400, "Unable to create user");
      }
      await sendVerificationEmail(
        body.email,
        verificationToken,
        body.firstName
      );
      return NextResponse.json(
        new ApiResponse(200, null, "User registered successfully")
      );
    } else {
      throw new ApiError(400, "Missing required fields");
    }
  });
}
