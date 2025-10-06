import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5 * 1000 }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
