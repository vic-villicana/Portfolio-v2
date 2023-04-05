import '@/styles/globals.css'
import Layout from '../components/layout/layout'
import {Fragment} from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Web Development | Cloud Architecture Services</title>
        <link rel="Shortcut icon" href="/logo.svg" type="image/x-icon" />
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
        <meta name="descrition" content="Freelance Web Developer and Cloud Architect. Building cost-effective apps that scale on the cloud is my business." />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
