import { Inter } from 'next/font/google';
import { Header, Hero, Row } from '../components';
import { TailwindIndicator } from '../components/taiwindIndecator';
import { GetServerSideProps } from 'next';
import { API_REQUEST } from '@/services/api.service';
import { IMovie } from '@/interfaces/app.interfaces';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home( { trending, top_rated }: homeProps) {
  return (
    <div className='relative min-h-[1000px]'> 
      <Head>
        <title>Home - movies</title>
        <meta name='top movies' content='movies-app-API' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <link rel="icon" href="logo.svg" />
      </Head>
      <Header />
      <Hero trending={trending} />
      <Row top_rated={top_rated} />
      <TailwindIndicator />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<homeProps> = async () => {
 const trending = await fetch(API_REQUEST.trending).then(res => res.json());
 const top_rated = await fetch(API_REQUEST.top_rated).then(res => res.json());
  return {
    props: {
      trending: trending?.results,
      top_rated: top_rated?.results,
    },
  };
};

interface homeProps {
  trending: IMovie[];
  top_rated: IMovie[];
}

