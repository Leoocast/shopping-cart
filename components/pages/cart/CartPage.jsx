import React from 'react'
import dynamic from 'next/dynamic' 
import { useCart } from '../../../hooks/useCart'
import { CartHeader } from './CartHeader'

//Component condicional en el front
const CartBody = dynamic(() => import("./CartBody").then(mod => mod.CartBody), {ssr: false})

export const CartPage = () => {
    
    const { cart, getTotals, removeItem, updateQuantity, cleanCart } = useCart()

    const { totalItems, totalPrice } = getTotals()

    const handleCleanCart = () => {
        cleanCart()
    }

    const handleRemoveItem = id => {
        return () => {
            removeItem(id)
        }
    }

    const customQuantityChange = id => {
        
        return newQuantity => {
            updateQuantity(id, newQuantity)
        }
    }
  
    return (
    <>
        <div className="container mx-auto ">
            <div className="flex justify-center my-6">
                <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5 rounded-lg border-2 border-opacity-30">
                    <CartHeader handleCleanCart={handleCleanCart} totalItems={totalItems}/>
                    <CartBody 
                        cart={cart} 
                        totalItems={totalItems} 
                        totalPrice={totalPrice} 
                        customQuantityChange={customQuantityChange} 
                        handleRemoveItem={handleRemoveItem}
                        cleanCart={cleanCart}
                    />
                </div>
            </div>
        </div>
    </>
    )
}