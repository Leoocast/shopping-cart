import { getPerfectProductRoute } from '../../helpers'
import { BASE_ROUTE } from './config'

const route = BASE_ROUTE`products`

export const getProducts = async (currentName = '') => {
    try {
        const response = await fetch(route)
        const result = await response.json()

        if(currentName == '')
            return result

        return result.find(({name}) => getPerfectProductRoute(name) === currentName)
        
    } catch(ex){
        console.log("Exception at: getProducts\n", ex)
        return null
    }
}