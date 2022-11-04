import Head from 'next/head'

// imported Head from next/head in order to use custom titles for e.g SWAPI
export default function Home() {

  return (
    <main>
      <Head>
        <title>SWAPI</title>
      </Head>

      {/* SWAPI app landing text */}
      <section className='section'>
        <h1>
          Star Wars API with NextJS
        </h1>
      </section>

      {/* Home page jsx text styling */}
      <style jsx>
        {`
        .section > h1 {
          font-family: 'Permanent Marker', cursive;
          text-align: center;
          margin-top: 5rem;
          letter-spacing: 1.5px;
          font-size: 2rem;
          color: #232323;
        }
        `}
      </style>
    </main>
  )
}
