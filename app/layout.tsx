import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hetheya – Farm-Fresh Dairy from the Nilgiris",
  description: "Premium A2 dairy, organic farming, Nilgiri tea & coffee plantations, medicinal plants, and ecotourism experiences — all from the misty hills of Ooty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
