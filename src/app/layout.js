import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hassanrazaportfolio.vercel.app"),
  title: "Muhammad Hassan Raza | Full Stack Developer (MERN & Next.js) | Portfolio",
  description: "Portfolio of Muhammad Hassan Raza, a Full Stack Developer creating modern, scalable, and high-performance web applications & SaaS products using MERN & Next.js.",
  keywords:
    "Software Engineer, Software Developer, Full Stack Developer, MERN Stack Developer, Frontend Developer, Backend Developer, ReactJS Developer, NextJS Developer, NodeJS Developer, ExpressJS Developer, Muhammad Hassan Raza, Muhammad Hassan Raza Portfolio, muhammad hassan raza, muhammad hassan raza portfolio, hassan raza portfolio, hassan developer portfolio, hassan raza developer portfolio, Hire Remote Full Stack Developer, Developer Portfolio",
  authors: [{ name: "Muhammad Hassan Raza", url: "https://hassanrazaportfolio.vercel.app/" }],
  robots: "index, follow, max-snippet:-1",
  openGraph: {
    title: "Muhammad Hassan Raza | Full Stack Developer (MERN & Next.js) | Portfolio",
    description: "Portfolio of Muhammad Hassan Raza, a Full Stack Developer creating modern, scalable, and high-performance web applications & SaaS products using MERN & Next.js.",
    type: "website",
    url: "https://hassanrazaportfolio.vercel.app/",
    images: [
      {
        url: "/images/mypicture.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hassan Raza Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://hassanrazaportfolio.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
      </body>
    </html>
  );
}
