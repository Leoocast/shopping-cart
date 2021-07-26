import { useState } from 'react'
import { tryParseInt } from '../helpers'

export const useCounter = ({initialState, min = 1, max = 125000}) => {

    const [state, setState] = useState(initialState < min ? min : initialState)

    const increment = () => {

        const parsedState = tryParseInt(state)

        const newState = parsedState + 1

        if(newState > max)
            return setState(max)

        setState(newState)
    }

    const decrement = () => {

        const parsedState = tryParseInt(state)

        const newState = parsedState - 1

        if(newState < min)
            return setState(min)

        setState(newState)
    }

    const setQuantity = quantity => {

        const parsedQuantity = tryParseInt(quantity)
        
        if(parsedQuantity === 0)
            return setState('')

        if(parsedQuantity > max)
            return setState(max)
        
        if(parsedQuantity < min)
            return setState(min)
        
        setState(parsedQuantity)
    }

    return [state, setQuantity, increment, decrement]
}