import { ApiError } from "@/Utils/ApiError";
import { ApiResponse } from "@/Utils/ApiResponse";
import { asyncHandler } from "@/Utils/asyncHandler";
import { SelectUserDetailsFromDB } from "@/Utils/constants";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import moment from "moment";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

type ParamsType = {
  id: string;
};

export async function GET(
  req: NextRequest,
  { params }: { params: ParamsType }
) {
  return asyncHandler(async () => {
    const { id } = params;

    const changeLog = await db.log.findFirst({
      where: { id },
      include: {
        project: { select: { id: true, name: true } },
        createdBy: { select: SelectUserDetailsFromDB },
        updatedBy: { select: SelectUserDetailsFromDB },
      },
    });

    if (!changeLog) {
      throw new ApiError(404, "Change log not found");
    }

    return NextResponse.json(
      new ApiResponse(200, changeLog, "Changelog fetched successfully")
    );
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: ParamsType }
) {
  return asyncHandler(async () => {
    const { id } = params;

    const session = await getServerSession(authOptions);
    // @ts-ignore
    const userId = session?.user?.id!;

    if (!userId) {
      throw new ApiError(401, "Unauthorized request");
    }

    const changeLog = await db.log.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });
    if (!changeLog) {
      throw new ApiError(404, "Change log not found");
    }

    if (changeLog.createdById !== userId) {
      throw new ApiError(401, "Unauthorized request");
    }

    const deleteChangeLog = await db.log.update({
      where: { id },
      data: {
        updatedById: userId,
        deletedAt: new Date(),
      },
    });

    if (!deleteChangeLog.deletedAt) {
      throw new ApiError(500, "Something went wrong while delete change log");
    }

    return NextResponse.json(
      new ApiResponse(200, null, "Change log deleted successfully")
    );
  });
}
