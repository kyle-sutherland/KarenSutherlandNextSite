import Head from 'next/head'
import Header from '@components/header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div className='content'>
              <Header title="Welcome to my app!" />
              <p className="description">
                  Get started by editing <code>pages/index.js</code>
              </p>
          </div>

      </main>
    </div>
  )
}
