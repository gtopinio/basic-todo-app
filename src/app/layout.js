import Link from "next/link";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/notes">
                    Notes
                </Link>
            </nav>
            {children}
          </main>
          </body>
      </html>
    )
  }
  