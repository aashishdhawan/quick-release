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


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Release",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      url: "https://flowbite.com/docs/images/logo.svg",
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
              <ProjectProvider>
                <ChangeLogProvider>
                  <div className="bg-gray-50 dark:bg-gray-900 h-screen">{children}</div>
                  <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
                </ChangeLogProvider>
              </ProjectProvider>
            </UserProvider>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
