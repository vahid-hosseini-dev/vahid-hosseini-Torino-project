import Layout from "@/components/layout/Layout";
import { UserProvider } from "@/context/userContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 5 * 1000 }}
        />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
