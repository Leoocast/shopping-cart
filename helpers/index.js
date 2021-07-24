export const currencyFormat = number => 
        new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(number)
    
export const getPerfectProductRoute = name => {

    const result = name.replace(/,/g, '-')   //[Que-onda, que andas, haciendo-hoy]
                       .split(' ')             //[Que-onda,que,andas,haciendo-hoy]
                       .join('-')              //Que-onda-que-andas-haciendo--hoy]
                       .split('-')             //[Que, onda, que, andas, haciendo, '', hoy]
                       .filter(r => r !== '' ) //[Que, onda, que, andas, haciendo, hoy]
                       .join('-')              //[Que-onda-que-andas-haciendo-hoy] :)

    
    //Removemos acentos
    return result.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}