import { getProducts } from '../api/products'
import { getPerfectProductRoute } from '../../helpers'

import { SingleProductPage } from '../../components/pages/producto/SingleProductPage'

export default function Producto(props) {

  return (
      <>
        <SingleProductPage {...props}/>
      </>   
    )
}

export async function getStaticProps({params: {name}}){

    const product = await getProducts(name);

    return {
        props: product
    }
}

export async function getStaticPaths() {
    const data = await getProducts();

    const paths = data.map(product => ({
        params: {name: getPerfectProductRoute(product.name.toString())},
    }))

    return {paths, fallback: false}
}