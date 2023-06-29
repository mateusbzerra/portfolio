import "./globals.css";
import { Metadata } from "next";
import { Raleway } from "next/font/google";

const ralewayFont = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateus Bezerra - Front-end Engineer",
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
        <header className="w-full h-28 flex justify-center">
          <div className="flex w-full max-w-screen-xl px-4 items-center justify-start">
            <h1 className="text-6xl font-extrabold">M</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
