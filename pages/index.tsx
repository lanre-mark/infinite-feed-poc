import Head from 'next/head'
import Link from 'next/link'
import FeedSlot from 'components/FeedSlot'
import Layout from 'components/Layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Infinite Newsfeed POC</title>
      </Head>
      <h1>Hello there!</h1>
      <p>Welcome to  platform 🤷</p>
      <span>Check out these pages:</span>
      <ul>
        <li>Project <Link href="/projects/10">Blue Onion Labs</Link></li>
        <li>User <Link href="/users/11">Cai Burris</Link></li>
     </ul>
     <FeedSlot/>
    </Layout>
  )
}
