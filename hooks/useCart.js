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

    const getItem = id => {
        
        const item = cart.find(item => item.id === id)
        
        return item
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

    const cleanCart = () => {
        setCart([])
        setContext({cart: []})
    }

    const getTotals = () => cart.reduce((returnedValue,n) => {

            const quantity = (Number.isNaN(n.quantity) ? 0 : n.quantity)
    
            returnedValue.totalItems += quantity
            
            returnedValue.totalPrice += (quantity * n.price)
    
            return returnedValue
    
        }, {totalItems: 0, totalPrice: 0})
        
    return {cart, addItem, removeItem, updateQuantity, getTotals, cleanCart, getItem}
}