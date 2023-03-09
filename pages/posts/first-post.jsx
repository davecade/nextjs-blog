import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>first-post</title>
      </Head>
      <h2>
          <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}

// You are up to Assets, Metadata, and CSS -- Page 8

export default FirstPost