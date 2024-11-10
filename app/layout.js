import "./globals.css";


export const metadata = {
  title: "Quick Todo",
  description: "Getting hands on Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-gray-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
