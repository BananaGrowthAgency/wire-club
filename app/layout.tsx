import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wire Business Club Spain — El Club de Empresarios para Ampliar tu Red de Contactos",
  description: "Club de negocios para grandes empresarios y directivos. Networking a nivel nacional mediante comidas de trabajo premium y eventos Life Style en 9 ciudades de España.",
  keywords: "wire business club spain, club de empresarios, networking empresarial, red de contactos, club negocios españa, eventos empresariales, comidas de trabajo premium",
  openGraph: {
    title: "Wire Business Club Spain — Negocio & Ocio al Mismo Nivel",
    description: "El club de empresarios perfecto para ampliar tu red de contactos y crecer empresarialmente. 9 delegaciones en España.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
