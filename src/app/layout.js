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
  title: "Muhammad Hassan Raza - Portfolio",
  description: "Portfolio of Muhammad Hassan Raza, a Full Stack Developer creating modern, scalable, and high-performance web applications and SaaS products.",
   openGraph: {
    title: "Muhammad Hassan Raza - Portfolio",
    description: "Portfolio of Muhammad Hassan Raza, a Full Stack Developer creating modern, scalable, and high-performance web applications and SaaS products.",
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
