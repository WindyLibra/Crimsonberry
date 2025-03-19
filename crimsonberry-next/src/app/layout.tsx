export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" ml-aware="true" ml-update="aware">
      <head>
        <title>Home - Crimsonberry</title>
        <link rel="shortcut icon" type="image/x-icon" href="raspberry.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}