export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" ml-aware="true">
      <body>{children}</body>
    </html>
  )
}