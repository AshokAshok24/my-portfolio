import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HomeContainer from "@/components/HomeContainer";
import AdminPage from "@/components/AdminPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init();
  }, []);

  if (!isClient || !router.isReady) {
    return <p>Loading...</p>;
  }


  if (router.pathname.startsWith("/admin")) {
    return <AdminPage />;
  }

  return (
    <>
      {/* ✅ Global Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <HomeContainer>
        <Component {...pageProps} />
      </HomeContainer>
    </>
  );
}
