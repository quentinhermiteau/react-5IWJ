import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <div className="m-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
