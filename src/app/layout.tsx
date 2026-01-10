import { Inter, Work_Sans } from "next/font/google";
import "../styles/global.css";
import { Footer, Navbar } from "../components/shared/index";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Inter for headings

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Work Sans for body
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        <Navbar />
         <main className="flex-1 mt-24"> {/* mt-24 to offset fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
