import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-[#48C6DA] w-full h-20 rounded-tr-3xl rounded-bl-3xl flex items-center justify-center  ">
          a
          </header>
          {children}
      </body>
    </html>
  );
}
