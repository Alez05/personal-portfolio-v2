import "../styles/global.css";
import { Footer, Navbar } from "../components/shared/index";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Fonts: Inter for headings, Work Sans for body
import { Inter, Work_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      {/* Apply both fonts to body to prevent SSR mismatch */}
      <body className={`${inter.variable} ${workSans.variable}`}>
        <Navbar />
        <main className="flex-1 mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
