import { getProducts } from '../api/products'
import { getPerfectProductRoute } from '../../helpers'

export default function Producto({id, name, price, cover}) {

    console.log("Producto: \n", id,name,price, cover)

  return (
    <div className="flex flex-wrap justify-around">
        Que peo krnal
    </div>
  )
}

export async function getStaticProps({params: {name}}){

    const product = await getProducts(name);

    return {
        props: {...product}
    }
}

export async function getStaticPaths() {
    const data = await getProducts();

    const paths = data.map(product => ({
        params: {name: getPerfectProductRoute(product.name.toString())},
    }));

    return {paths, fallback: false}
}