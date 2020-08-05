import '../styles/globals.css'
import Head from 'next/head'
import React,{useEffect} from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    // document.getElementsByClassName("Home_container__1EcsU").styles.padding = "0px"
    console.log("test")
  },[])
  return (
    <>
      <Head>
        <title>DOSCG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
