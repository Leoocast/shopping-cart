import tw, { css, styled } from 'twin.macro'

export default {
    CartItemName: styled.h1(({isDetail = false})=>[
        tw`text-lg font-normal`,
        css`
            width: ${isDetail ? '20rem' : '11rem'};
            overflow: hidden;
            line-height:2rem;
            max-height: 2rem;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
        `
    ]) 
}