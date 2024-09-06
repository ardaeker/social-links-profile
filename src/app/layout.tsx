import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/tailwind.css";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#141414",
};

export const metadata: Metadata = {
  title: "Arda Eker - Social Links Profile",
  description:
    "This is a solution to the Social Links Profile challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
  keywords: [
    "Frontend Mentor",
    "Tailwind CSS",
    "NextJS",
    "Arda Eker",
    "Social Links Profile",
    "Frontend Mentor Challenge",
    "Social Links Profile Challenge",
    "Social Links Profile Solution",
  ],
  metadataBase: new URL("https://fm-2024-social-links-profile.vercel.app/"),
  openGraph: {
    title: "Arda Eker - Social Links Profile",
    description:
      "This is a solution to the Social Links Profile challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    url: "fm-2024-social-links-profile.vercel.app",
    type: "website",
  },
  twitter: {
    title: "Arda Eker - Social Links Profile",
    description:
      "This is a solution to the Social Links Profile challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
