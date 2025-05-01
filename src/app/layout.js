import "./globals.css";

export const metadata = {
  title: "Kevin Ye",
  description: "My portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Load Cantata One manually */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cantata+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#1A1A1A] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
