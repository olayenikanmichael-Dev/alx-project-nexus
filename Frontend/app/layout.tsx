import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
// import ModalsPage from "./components/Modals/Modals";

import LoginModal from "./components/Modals/LoginModals";
import SignupModal from "./components/Modals/LoginModals";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habita",
  description: "Your Listing Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const content = (
  

      <h4>Welcome to Habita!</h4>
    )
  
   
     
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        
<div className="pt-32">
   {children}
   </div>
       {/* <ModalsPage label='Welcome to Habita'
       content={content}
       isOpen={true}
       close={true} /> */}

       <LoginModal />
      <SignupModal />

      </body>
    </html>
  );
}
