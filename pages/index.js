import { useEffect, useState } from 'react'
import { getProducts } from './api/products'

import { Product } from '../components/pages/home'
import { NewDialog } from '../components/base/Dialog'

export default function Home({products}) {

  const [currentProduct, setCurrentProduct] = useState({})
  const [openModal, Modal] = NewDialog(currentProduct)
  
  const handleProductClick = product => {
    setCurrentProduct(product)
    openModal()
  }

  return (
    <div className="flex flex-wrap justify-around">
      {products.map(product => (
        <Product 
          key={product.id+product.name} 
          {...product}
          onClickProduct={() => handleProductClick(product)} 
          />
      ))}
      <Modal/>
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