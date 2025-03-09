import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HomeContainer from "@/components/HomeContainer";
import AdminPage from "@/components/AdminPage";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init();
  }, []);

  useEffect(() => {
    console.log("Current Pathname:", router.pathname);
  }, [router.pathname]);

  // ✅ Prevent hydration mismatch
  if (!isClient || !router.isReady) {
    return <p>Loading...</p>;
  }

  // ✅ Show only AdminPage when visiting `/admin`
  if (router.pathname.startsWith("/admin")) {
    return <AdminPage />;
  }

  // ✅ For all other pages, use HomeContainer
  return (
    <HomeContainer>
      <Component {...pageProps} />
    </HomeContainer>
  );
}
