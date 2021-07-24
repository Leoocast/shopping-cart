import { useState, useEffect, useRef } from 'react'
export const useFetch = url => {

    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        loading: true,
    })

    useEffect(()=> {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setState({...state, loading: true})  
        fetch(url).then(res => res.json()).then(data => {
            if(isMounted.current) 
                setState(
                {
                    data: data,
                    loading: false,
                })  
        })

    }, [url])

    return [state]
}