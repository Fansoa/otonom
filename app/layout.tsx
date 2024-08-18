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
  title: "Otonom",
  description:
    "Plateforme complète de gestion pour les particuliers souhaitant gagner en autonomie. Explorez des modules dédiés à la culture d'un potager, l'élevage d'insectes, et la gestion d'un poulailler. Prenez le contrôle de votre autosuffisance en toute simplicité.",
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
