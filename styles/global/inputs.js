import tw, { css, styled } from 'twin.macro'

export default {
    Quantity: styled.input(()=>[
        tw`
            mx-2 border text-center w-32
            sm:(w-32 text-lg)
            md:(w-32)
        `,
        css`
            &:focus{
                outline: none;
            }   

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            @media (max-width: 640px) {
                 font-size: 0.875rem!important;
                 width:6rem
            }
        `
    ]),
    MinusPlusWrapper: styled.div(()=>[
        tw`
            transition p-3 h-10 transform hover:scale-125 active:scale-75
        `,
    ]),
}