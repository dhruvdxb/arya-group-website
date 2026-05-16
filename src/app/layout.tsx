import "./globals.css";

export const metadata = {
  title: "Arya Group",
  description: "Luxury Swimming Pool Design & Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}