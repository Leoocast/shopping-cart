import React, { useRef, useEffect, useState } from 'react'

import { CartItems } from './CartItems'
import { CartSummary } from './CartSummary'
import { CartEmpty } from './CartEmpty'

export const CartBody = ({totalItems, totalPrice, cart, customQuantityChange, handleRemoveItem, cleanCart}) => {

    /*
      Necesario para poder devolver correctamente un componente condicional.
      Es necesario hacer la comparación para asegurarnos que estamos obteniendo el 
      estado correcto a través del ciclo de vida del componente.
    */

    //De no hacer lo siguiente, la página puede quebrarse al vaciar el carro.
    const [currentTotalItems, setCurrentTotalItems] = useState(totalItems)

    const prevTotalItems = useRef()

    useEffect(() => {
        //ComponentDidMount
        if (prevTotalItems.current != currentTotalItems) 
            prevTotalItems.current = totalItems
        //ComponentDidUpdate
        else
            setCurrentTotalItems(totalItems)

    }, [totalItems])

    return currentTotalItems === 0
        ? <CartEmpty />
        : <div className="flex-1">
            <CartItems cart={cart} customQuantityChange={customQuantityChange} handleRemoveItem={handleRemoveItem}/>
            <hr className="pb-6 mt-6" />
            <CartSummary cleanCart={cleanCart} subTotal={totalPrice} /> 
        </div>
}