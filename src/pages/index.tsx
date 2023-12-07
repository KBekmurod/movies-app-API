import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Header } from '../components';
import { TailwindIndicator } from '../components/taiwindIndecator';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative min-h-[1000px]'> 
      <Head>
        <title>Home - movies</title>
        <meta name='top movies' content='movies-app-API' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <link rel="icon" href="logo.svg" />
      </Head>
      <Header />
      <TailwindIndicator />
    </div>
  )
}
