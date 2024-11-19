import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="body-bg">
        <Navbar />
        <div className="d-flex justify-content-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
