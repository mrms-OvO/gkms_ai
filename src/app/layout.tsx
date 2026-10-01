export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <h1>学マスAI</h1>
        {children}
        </body>
    </html>
  );
}