import tw, { css, styled } from 'twin.macro'

export default {
    Wrapper: tw.div`min-w-min flex items-start p-5 lg:p-10 overflow-hidden relative`,

    Container: tw.div`w-full max-w-6xl rounded bg-white shadow-xl text-gray-800 relative md:text-left
                      rounded-lg border-2 border-opacity-30
    `,
    
    AddToCartButton: tw.button`
            w-48 flex h-10 items-center justify-center rounded-md border border-gray-300 transition transform
            mb-3
            sm:(-mr-3)
            hover:(bg-blue-900 text-white scale-110)
            active:(scale-95)
        `,
    ImageWrapper: tw.button`
                        px-10 mb-10 md:mb-0
                        md: (w-full)
                        xl:(w-1/2)
                    `,
    Title: tw.div`
        text-left m-3 mt-5 mb-5 font-bold uppercase
        md:(text-lg mr-5 mt-5 )  
        lg:(text-xl) 
    `,
    QuantityTotalWrapper: tw.div`inline-block align-bottom mr-5 flex flex-wrap justify-between items-center`,

    Quantity: styled.div(()=>[
        tw` 
            m-3 text-sm text-left
            xl:(w-full text-xl flex flex-col items-start)
            2xl:(w-1/5)
        `, 
        css `
        @media (max-width: 640px) {
             text-align: right;
             font-size: 0.875rem!important;
         }
     `
    ]),
    
    Total: styled.div(()=>[
        tw`
            mr-5 text-right mt-5
            sm:(w-full text-right mt-3)
            md:(mt-5 w-full)
            xl:(w-full text-xl)
            2xl:(w-1/2)
        `,
        css `
           @media (max-width: 640px) {
                text-align: right;
                width: 100%;

                .price {
                    margin-top: -1.5rem;
                    font-size: 1.3rem;
                }
            }
        `
    ])
}