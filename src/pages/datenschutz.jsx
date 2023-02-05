import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DataPrivacy } from '@/components/DataPrivacy'

export default function Home() {
  return (
    <>
      <Head>
        <title>ascenue - Datenschutzerklärung</title>
        <meta
          name="description"
          content="Ecommerce for small businesses."
        />
      </Head>
      <Header />
      <main>
        <DataPrivacy />
      </main>
      <Footer />
    </>
  )
}