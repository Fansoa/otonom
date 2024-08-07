import localFont from "next/font/local";
import "./globals.css";

const Inter = localFont({
  src: "../fonts/inter/InterVariable.woff2",
  variable: "--font-inter",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Inter.variable} h-full bg-white`}>
      <body className="h-full">
        <main>{children}</main>
      </body>
    </html>
  );
}
