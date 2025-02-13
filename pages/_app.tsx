import type { AppProps } from "next/app";
import Layout from "@/components/hostLayout"
import React from 'react';
import '@/styles/stylesGlobal.css'
import { ChakraProvider } from '@chakra-ui/react'




export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>

    </>
  );
}
