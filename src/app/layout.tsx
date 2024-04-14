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
async function getProductCategory() {
  try {
    const res = await fetch("https://dummyjson.com/products/categories");
    return res.json();
  } catch (error) {}
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryItem = await getProductCategory();
  console.log(categoryItem);
  

  return (
    <html lang="en">
      <body>
        <div className="conatiner">
          <Sidebar categories={categoryItem} />
          <div className="right">
            <Header />
            <div className="content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
