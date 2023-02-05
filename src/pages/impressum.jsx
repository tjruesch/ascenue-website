import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Imprint } from '@/components/Imprint'

export default function Home() {
  return (
    <>
      <Head>
        <title>ascenue - Impressum</title>
        <meta
          name="description"
          content="Ecommerce for small businesses."
        />
      </Head>
      <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Imprint />
      </main>
      <Footer />
      </div>
    </>
  )
}