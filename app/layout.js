import "./globals.css";

export const metadata = {
  title: "quick 2-do",
  description: "A cool todo web-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-gray-300 antialiased`}>{children}</body>
    </html>
  );
}
