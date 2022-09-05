import Head from 'next/head'
import requests from '../utils/requests'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'


export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu - Clone</title>
        <meta name="description" content="Hulu app created with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Nav/>
      <Results results={results}/>
   </div>
  )
}

export async function getServerSideProps(context){
  /*use the context to get info from the page*/
  const genre = context.query.genre;
  const baseURL = "https://api.themoviedb.org/3"; 
  const request = await fetch(
    `${baseURL}${requests[genre]?.url || requests.fetchTrending.url}`
    ).then(res => res.json());

  if(request){
    return {
      props:{
        results: request.results,
      },
    }
  };

}

