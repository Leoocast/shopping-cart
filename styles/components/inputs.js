import tw, { css, styled } from 'twin.macro'

export default {
    Quantity: styled.input(()=>[
        tw`mx-2 border text-center w-32`,
        css`
            &:focus{
                outline: none;
            }   

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        `
    ]) 
}