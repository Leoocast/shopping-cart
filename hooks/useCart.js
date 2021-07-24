import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useAppContext } from '../components/context'

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

    const getTotalItems = () => cart.reduce((c,n) => c + n.quantity, 0)

    return {cart, addItem, getTotalItems}
}