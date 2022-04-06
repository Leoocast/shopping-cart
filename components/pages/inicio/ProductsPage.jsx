import Router from 'next/router'
import { Product } from './Product'

import { getPerfectProductRoute } from '../../../helpers'

export const ProductsPage = ({products}) => {

  const formattedRoute = route => `${location.origin}/producto/`+ getPerfectProductRoute(route) 

  const handleProductClick = ({name}) =>  Router.push(formattedRoute(name));

  return (
    <div className="flex flex-wrap justify-around w-full">
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