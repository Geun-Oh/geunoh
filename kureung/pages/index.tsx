import type { NextPage } from 'next'
import Head from 'next/head'
import Map from '../components/Map';
import { useRecoilState } from 'recoil';

const Home: NextPage = () => {
  return (
    <div style={{ position : 'relative' }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input type="text" style={{ position: "absolute", top: "30px", left: "30px",  backgroundColor: "beige", zIndex: 2 }} />
      <input type="button" style={{ position: "absolute", top: "50px", left: "100px",  backgroundColor: "beige", zIndex: 2 }} />
      <Map latitude={37.588194705681} longitude={127.03402453668} />
    </div>
  )
}

export default Home;
