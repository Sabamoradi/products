import type { Metadata } from "next";
import "./globals.css";
import "../styles/root.scss";
import "../assets/font/font.css";
import Header from "@/containers/Header";
import Sidebar from "@/containers/Sidebar";

export const metadata: Metadata = {
  title: "products",
  description: "products app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="conatiner">
          <Sidebar />
          <div className="right">
            <Header />
            <div className="content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
