import type { Metadata } from "next";
import "./globals.css";
import { HeaderLayout } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Talles Especiales",
  description:
    "Tienda Online de ropa con talles Especiales para Hombre y Mujer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <header>
        <HeaderLayout />
      </header>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
      <Footer />
    </html>
  );
}
