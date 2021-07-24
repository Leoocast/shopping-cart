import React from 'react'

import { useCounter } from '../../hooks/useCounter'

import { Inputs } from '../../styles/components/'

export const InputCounter = () => {

    const quantityHandler = {
        initialState: 1,
        min: 1,
        max: 125000
    }

    const [quantity, setQuantity, increment, decrement] = useCounter(quantityHandler)

    const handleQuantityChange = ({target}) => {
        setQuantity(target.value)
    }

    return [
        quantity,
        () => (<>
          <button 
                className="p-3 h-10" 
                onClick={decrement}>
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>
            </button>
               
            <Inputs.Quantity
                onChange={handleQuantityChange} 
                value={quantity} 
                max={quantityHandler.max} 
                min={quantityHandler} 
                placeholder="1" 
                type="number"
            />
            
            <button 
                className="p-3 h-10" 
                onClick={increment}>
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>
            </button>   
        </>)
        ]
}
