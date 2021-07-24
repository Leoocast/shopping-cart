import { useState } from 'react'
import { getProducts } from './api/products'

import { Product } from '../components/pages/home'

export default function Home({products}) {

  //Intenté pasar con el spread operator todas las props así:
  //{...product} pero me daba error e investigué y creo que es problema del framework.
  const Products = () => products.map(({id, name, cover, price}) => (
    <Product key={id+name} id={id} name={name} cover={cover} price={price}/>
  ))
  
  return (
    <div className="flex flex-wrap justify-around">
      <Products/>
    </div>
  )
}

export async function getStaticProps(){
  const products = await getProducts()

  return {
    props: {
      products
    }
  }
}