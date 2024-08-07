import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Container } from "@/components/global/Container";
import Provider from "./provider";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Stores",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
