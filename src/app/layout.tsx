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
          <h1 className="text-white text-2xl font-bold">ソリティアシミュレーターだ、よ🦉</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
