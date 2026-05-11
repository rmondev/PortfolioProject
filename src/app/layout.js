import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Riccardo Moncada — Portfolio",
  description: "Riccardo Moncada — Business / Systems Analyst and Full-Stack Developer. Computer Programming & Analysis graduate, Seneca College.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
       <TransitionProvider>
        {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
