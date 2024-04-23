import type { Metadata } from "next";
import "./globals.css";
import AllOverlays from "./components/AllOverlay";
import UserProvider from "./context/user";
export const metadata: Metadata = {
  title: "ACVERSE",
  description: "ACVERSE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <AllOverlays />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
