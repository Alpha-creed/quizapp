import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import LayoutProvider from "@/providers/LayoutProviders";

const raleway = Raleway({ subsets: ["latin"],
  weight:["200","300","400","500","600","700","900"]
 });

export const metadata: Metadata = {
  title: "CreedQuiz",
  description: "Quizzes for beginner developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${raleway.className} min-h-screen`}>
        <LayoutProvider>
        {children}
        </LayoutProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
