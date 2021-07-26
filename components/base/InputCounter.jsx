import { useState, useEffect } from 'react'
import { Icons } from '../../helpers'

import { useCounter } from '../../hooks/useCounter'

import { Inputs, Buttons } from '../../styles/global/'


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
        <Buttons.MinusPlus onClick={increment}>
          <Icons.Minus/>
        </Buttons.MinusPlus>
           
        <Inputs.Quantity
            onBlur={handleOnBlur}
            onChange={handleQuantityChange} 
            value={quantity} 
            max={quantityHandler.max} 
            min={quantityHandler.min} 
            placeholder="1" 
            type="number"
        />
        <Buttons.MinusPlus onClick={increment}>
            <Icons.Plus/>
        </Buttons.MinusPlus>
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
