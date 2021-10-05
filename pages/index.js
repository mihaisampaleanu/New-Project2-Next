import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>New Project2</title>
          <meta property="og:title" content="New Project2" />
        </Head>
        <div className="container1"></div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Home
