import { BASE_ROUTE } from './config'

const route = BASE_ROUTE`products`

export const getProducts = async () => {
    try {
        const response = await fetch(route)
        const result = await response.json()

        return result
    } catch(ex){
        console.log("Exception at: getProducts\n", ex)
        return null
    }
}