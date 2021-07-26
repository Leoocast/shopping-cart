import { Product } from './Product'

import { getPerfectProductRoute } from '../../../helpers'

export const ProductsPage = ({products}) => {

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