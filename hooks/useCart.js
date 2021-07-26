import { useLocalStorage } from './useLocalStorage'
import { useAppContext } from '../components/context'

import { tryParseInt } from '../helpers/'

export const useCart = () => {

    const [cart, setCart] = useLocalStorage('cart', [])

    const [appContext, setContext] = useAppContext()

    const addItem = (newItem) => {

        const isThere = cart.some(item => item.id === newItem.id)

        let newCart = []

        if(isThere)
            newCart = cart.map(item => 
                item.id === newItem.id
                ? {...item, quantity: item.quantity + newItem.quantity} 
                : item   
            )
        else 
            newCart = [...cart, newItem]

        setCart(newCart)
        setContext({...appContext, cart: newCart})
    }
    
    const removeItem = id => {
        
        const newCart = cart.filter(item => item.id !== id)
        
        setCart(newCart)
        setContext({...appContext, cart: newCart})
    }

    const updateQuantity = (id, newQuantity) => {

        //Cuando se ingresa con teclado, lo lee como string
        const parsedQuantity = tryParseInt(newQuantity)

        const newCart =  cart.map(item => 
                            item.id === id
                            ? {...item, quantity: parsedQuantity} 
                            : item
                         )
        
        setCart(newCart)
        setContext({...appContext, cart: newCart})
    }

    const getTotalItems = () => cart.reduce((c,n) => {

        return c + (Number.isNaN(n.quantity) ? 0 : n.quantity)

    }, 0)

    return {cart, addItem, getTotalItems, removeItem, updateQuantity}
}