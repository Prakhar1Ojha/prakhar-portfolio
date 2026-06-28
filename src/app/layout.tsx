import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prakhar | Future Software Engineer & AI Developer",
  description:
    "Premium futuristic portfolio of Prakhar — AI Developer, Full Stack Engineer, and Tech Enthusiast. Explore projects, skills, and experience.",
  keywords: [
    "Prakhar",
    "Software Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Portfolio",
    "Machine Learning",
  ],
  authors: [{ name: "Prakhar" }],
  openGraph: {
    title: "Prakhar | Future Software Engineer",
    description: "Futuristic AI engineer portfolio with holographic interfaces",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
