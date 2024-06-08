import UserProvider from "./context/user";
import AllOverlays from "@/app/components/AllOverlays";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "START",
  description: "START SHOT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <AllOverlays />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
