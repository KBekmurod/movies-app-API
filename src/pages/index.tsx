import { Inter } from 'next/font/google';
import { Header, Hero, Row } from '../components';
import { TailwindIndicator } from '../components/taiwindIndecator';
import { GetServerSideProps } from 'next';
import { API_REQUEST } from '@/services/api.service';
import { IMovie } from '@/interfaces/app.interfaces';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home( { 
  trending,
	top_rated,
	tvTopRated,
	popular,
	documentary,
	family,
	history,
	comedy, }: homeProps) {
  return (
    <div className='relative min-h-screen'>
      <Head>
        <title>Home - movies</title>
        <meta name='top movies' content='movies-app-API' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <link rel="icon" href="logo.svg" />
      </Head>
      <Header />
      <Hero trending={trending} />
      <section>
        <Row title='Top roted' movies={top_rated} />
        <Row title='Tv Show' movies={tvTopRated} isBig={true} />
        <Row title='Popular' movies={popular} isBig={true} />
        <Row title='Documentary' movies={documentary.reverse()} />
        <Row title='History' movies={history} />
        <Row title='Family' movies={family} />
        <Row title='Comedy' movies={comedy.reverse()} />
      </section>
      <TailwindIndicator />
    </div>
  )
}
export const getServerSideProps: GetServerSideProps<homeProps> = async () => {
  const trending = await fetch(API_REQUEST.trending).then(res => res.json());
  const top_rated = await fetch(API_REQUEST.top_rated).then(res => res.json());
  const tvTopRated = await fetch(API_REQUEST.tv_top_rated).then(res => res.json());
  const popular = await fetch(API_REQUEST.popular).then(res => res.json());
  const documentary = await fetch(API_REQUEST.documentary).then(res => res.json());
  const comedy = await fetch(API_REQUEST.comedy).then(res => res.json());
  const family = await fetch(API_REQUEST.family).then(res => res.json());
  const history = await fetch(API_REQUEST.history).then(res => res.json()); 
  return {
    props: {
      trending: trending?.results,
      top_rated: top_rated?.results,
      tvTopRated: tvTopRated.results,
			popular: popular.results,
			documentary: documentary.results,
			comedy: comedy.results,
			family: family.results,
			history: history.results,
    },
  };
};

interface homeProps {
  trending: IMovie[];
  top_rated: IMovie[];
  tvTopRated: IMovie[];
	popular: IMovie[];
	documentary: IMovie[];
	comedy: IMovie[];
	family: IMovie[];
	history: IMovie[];
}

