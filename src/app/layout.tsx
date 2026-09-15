import type { Metadata } from "next";
import { fontHeading, fontSans } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Eli Fashion | Moda para toda a família em Guaraciaba do Norte",
  description:
    "Moda feminina, masculina e infantil no centro de Guaraciaba do Norte. Conheça a Eli Fashion e fale com a loja pelo WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fontSans.variable} ${fontHeading.variable} h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
