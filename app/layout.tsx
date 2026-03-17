import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const favicon = `data:image/svg+xml,<svg width='130' height='148' viewBox='0 0 130 148' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M68 0H61L36 42.5L41.5 51.5L56.5 25.5L82.5 69.5H43L28 43.5H0.5L62 148H69.5L94 105.5L88.5 96.5L73.5 123L48 78.5H87.5L102.5 105.5H130L68 0Z' fill='white'/><path d='M110 56.5L115.5 66L129 43.5H117.5L110 56.5Z' fill='white'/><path d='M20 92L14 82.5L0 105H13L20 92Z' fill='white'/></svg>`;

export const metadata: Metadata = {
  title: "Adnan Al-Omari · Frontend Dev & UI/UX",
  description:
    "Frontend developer and UI/UX designer with 5+ years of experience. React, Next.js, TypeScript. Poland — Remote / Hybrid.",
  icons: {
    icon: favicon,
    apple: favicon,
  },
  openGraph: {
    title: "Adnan Al-Omari · Frontend Dev & UI/UX",
    description:
      "Frontend developer and UI/UX designer. React, Next.js, TypeScript. Poland — Remote.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
