import React,{useState} from 'react'
import  {useRouter} from 'next/router'
import Head from 'next/head'
import ProductRange from '../../components/ProductRange'

const Category = () => {
    // Router
    const router=useRouter()

  return (
    <div>
        {/* Head */}
        <Head>
            <title> | Survive Pharma</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Survive Pharma Products Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProductRange />
    </div>
  )
}

export default Category