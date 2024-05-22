import HomeContainer from "@/components/HomeContainer";
import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
  return (

    <React.Fragment>

      <HomeContainer>
        <Component {...pageProps} />
      </HomeContainer>

    </React.Fragment>
  )
}
