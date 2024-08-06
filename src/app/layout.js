import { Inter } from "next/font/google";
import "./globals.css";
import AppBarComponent from "@/components/appBar/appBarComponent";


const inter = Inter({ subsets: ["latin"] });

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

export const metadata = {
  title: "Metal Roofing",
  description: "Metal Roofing",
  icon: "/assets/logo/MR-Cuadrado_sinnombre_Mesa de trabajo 1.png", // Añadir esta línea
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icon} />
      </head>
      <body className={inter.className}>
        <AppBarComponent />
        {children}
      </body>
    </html>
  );
}
