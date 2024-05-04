import "./_globals.css"
import { _App as App } from "./_app"
import Navigation from "./navigation"
import Footer from "./footer"

export const metadata = {
  title: "Spesana 24'B",
  description: "Kami adalah siswa siswi dari SMPN 1 Nnanggulan angkatan 2021 - 2024 !",
}

export default function RootLayout({ children }) {
  return <html>
    <body>
      <Navigation />
      <main><App>{children}</App></main>
      <Footer />
    </body>
  </html>
}
