import NavBar from "../components/modules/NavBar";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ClientProvider from "@/context/ClientProvider";
import Footer from "@/components/modules/Footer";

export const metadata = {
  title: "تورینو",
  description: "صفحه اصلی پروژه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <ClientProvider>
          <Toaster />
          <header className="text-center">
            <NavBar />
          </header>
          <main className="flex-1 flex flex-col items-center justify-center">
            {children}
          </main>
        </ClientProvider>
        <Footer />
      </body>
    </html>
  );
}
