import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfolio destinado a mostrar meus projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
