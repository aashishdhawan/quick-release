import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-quill/dist/quill.snow.css";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import Provider from "@/components/Provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { UserProvider } from "./context/UserContext";
import { ChangeLogProvider } from "./context/ChangeLogContext";
import { ProjectProvider } from "./context/ProjectContext";
import { WEB_DETAILS } from "@/Utils/constants";
import { ReleaseTagProvider } from "./context/ReleaseTagContext";
import { ReleaseCategoryProvider } from "./context/ReleaseCategoryContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: WEB_DETAILS.name,
  description: WEB_DETAILS.description,
  icons: [
    {
      rel: "icon",
      url: WEB_DETAILS.favicon,
    },
  ]
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider>
          <Provider>
            <UserProvider>
              <ReleaseCategoryProvider>
              <ReleaseTagProvider>
                <ProjectProvider>
                  <ChangeLogProvider>
                    <div className="bg-gray-50 h-screen">
                      {children}
                    </div>
                    <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
                  </ChangeLogProvider>
                </ProjectProvider>
              </ReleaseTagProvider>
              </ReleaseCategoryProvider>
            </UserProvider>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
