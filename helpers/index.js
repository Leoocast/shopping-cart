export { default as Icons } from './icons'

export const currencyFormat = number => 
        new Intl.NumberFormat('en-US', {}).format(number)
    
export const getPerfectProductRoute = name => {

    const normalizedName = name.trim()
                               .toLowerCase()
                               .normalize("NFD")
                               .replace(/[\u0300-\u036f]/g, "")

    const result = normalizedName.replace(/[^a-zA-Z0-9]|\s+/g, '-')
                                 .replace(/-+/g, '-')
                                 .replace(/\-+$/, '')
    return result
}

export const tryParseInt = (str, defaultValue = 0) => {
    
    if(typeof str === 'number')
        return str

    let retValue = defaultValue

    if(str !== null) 
        if(str.length > 0) 
            if (!isNaN(str)) 
                retValue = parseInt(str)
 
    return retValue
}
