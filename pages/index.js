import { getProducts } from './api/products'
import { Product } from '../components/pages/home'
import { getPerfectProductRoute } from '../helpers'

export default function Home({products}) {

  const formattedRoute = route => `${location.origin}/producto/`+ getPerfectProductRoute(route) 

  const handleProductClick = ({name}) => window.open(formattedRoute(name), '_blank')

  return (
    <div className="flex flex-wrap justify-around">
      {products.map(product => (
        <Product 
          key={product.id+product.name} 
          {...product}
          onClickProduct={() => handleProductClick(product)} 
          />
      ))}
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