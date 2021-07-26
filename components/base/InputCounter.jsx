import React, { useState, useEffect } from 'react'

import { useCounter } from '../../hooks/useCounter'

import { Inputs } from '../../styles/components/'

export const InputCounter = (options = {exportQuantity: true}, quantityHandler) => {

    const [ blurAffected, setBlurAffected] = useState(false)

    quantityHandler = quantityHandler ?? {
        initialState: 1,
        min: 1,
        max: 125000,
        customQuantityChange: () => {}
    }

    const [quantity, setQuantity, increment, decrement] = useCounter(quantityHandler)

    useEffect(() => {
        quantityHandler.customQuantityChange(quantity)
    }, [quantity])

    const handleQuantityChange = ({target}) => {
        setQuantity(target.value)
    }

    const handleOnBlur= ({target}) => {
        if(target.value === ''){
            setBlurAffected(true)
            setQuantity(quantityHandler.min)
        }
    }

    const Component = () => (<>
        <button 
            className="transition p-3 h-10 transform hover:scale-125 active:scale-75" 
            onClick={decrement}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
        </button>
           
        <Inputs.Quantity
            onBlur={handleOnBlur}
            onChange={handleQuantityChange} 
            value={quantity} 
            max={quantityHandler.max} 
            min={quantityHandler.min} 
            placeholder="1" 
            type="number"
        />
        
        <button 
            className="transition p-3 h-10 transform hover:scale-125 active:scale-75" 
            onClick={increment}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
        </button>   
    </>)

    if(options.exportQuantity)
        return [
            quantity,
            Component,
            setQuantity,
            blurAffected,
            setBlurAffected
        ]

    return Component
}
