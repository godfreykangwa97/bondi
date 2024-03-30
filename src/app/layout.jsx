import { Inter } from "next/font/google";
import "../scss/main.scss";
import Header from "@/common/header/Header";
import Footer from "@/common/footer/footer";

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

import {Suspense} from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bondi",
  description: "Your companion in luxury apartments",
    authors: "Emit arts & creatives | Godfrey kangwa"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<>Loading...</>}>
      <Header/>
        {children}
      <SpeedInsights />
          <Analytics />
      <Footer/>
      </Suspense>
      </body>
    </html>
  );
}
