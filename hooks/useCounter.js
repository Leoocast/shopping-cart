import { useState } from 'react'

export const useCounter = ({initialState, min = 1, max = 125000}) => {

    const [state, setState] = useState(initialState < min ? min : initialState)

    const increment = () => {
        const newState = state + 1

        if(newState > max)
            return setState(max)

        setState(state + 1)
    }

    const decrement = () => {

        const newState = state - 1

        if(newState < min)
            return setState(min)

        setState(state - 1)
    }

    const setQuantity = quantity => {
        
        const parseQuantity = parseInt(quantity)
        
        if(Number.isNaN(parseQuantity))
            return setState(state)

        if(parseQuantity > max)
            return setState(max)
        
        if(parseQuantity < min)
            return setState(min)
        
        setState(quantity)
    }

    return [state, setQuantity, increment, decrement]
}