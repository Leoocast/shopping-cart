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