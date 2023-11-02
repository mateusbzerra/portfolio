import "./globals.css";
import { Metadata } from "next";
import { Raleway } from "next/font/google";

const ralewayFont = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateus Bezerra - Software Engineer",
  description: "Mateus Bezerra portfolio and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ralewayFont.className} text-white bg-dark-blue h-full`}
      >
        {children}
      </body>
    </html>
  );
}
