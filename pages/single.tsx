import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
import React from 'react'
import Banner from '../components/single/Banner'
import BottomBanner from '../components/single/BottomBanner'
import Breadcrumbs from '../components/single/Breadcrumbs'
import ProductDetails from '../components/single/ProductDetails'
import Layout from '../partials/Layout'
import { CarMedia } from '../types/media.type'
import { SingleCar } from '../types/single-car.type'

function Single({data, media}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const car: SingleCar = data
    const carMedia: CarMedia = media
  return (
    <Layout>
      <Banner url={car.imageUrl} />
      <Breadcrumbs name={car.carName}  />
      <ProductDetails car={car} media={carMedia} />
      <BottomBanner/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
    const id = context.query.id
    // Fetch data from external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cars/${id}`)
    const data: SingleCar = await res.json()
    const mediaReq = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cars/media/${id}`)
    const media: SingleCar = await mediaReq.json()
    // Pass data to the page via props
    return { props: { data, media } }
  }

  
export default Single