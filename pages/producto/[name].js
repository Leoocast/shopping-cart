import { getProducts } from '../api/products'
import { getPerfectProductRoute } from '../../helpers'

export default function Producto({id, name, price, cover}) {

    console.log("Producto: \n", id,name,price, cover)

    //Verificar esto en el nombre de los productos // y el Eliminador de pelo sabrá porque no funca
  return (
    <div className="flex flex-wrap justify-around">
        {JSON.stringify([id, name, price, cover], null,4)}
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