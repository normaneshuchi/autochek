import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Layout from '../partials/Layout'
import Banner from '../components/landing/Banner'
import TopProducts from '../components/landing/TopProducts'
import { PopularCarResponse } from '../types/popular.type'

const Home: NextPage = ({data, brands}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <Layout>
      <Banner/>
      <TopProducts pagination={data.pagination} makes={brands.makeList.slice(0, 3)} cars={data.result} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/popular`)
  const data: PopularCarResponse = await res.json()
  // Fetch makes from External API
  const brandReq = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/brands`)
  const brands: PopularCarResponse = await brandReq.json()

  // Pass data to the page via props
  return { props: { data, brands } }
}

export default Home
