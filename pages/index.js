import { getProducts } from './api/products'
import { ProductsPage } from '../components/pages/inicio/ProductsPage'

export default function Inicio(props) {

  return (
    <>
      <ProductsPage {...props}/>
    </>
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