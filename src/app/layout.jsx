import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Portfolio",
  description: "A minimalist portfolio showcasing my work and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="container py-8">
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
              © 2026 Portfolio. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
