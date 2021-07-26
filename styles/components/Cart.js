import tw, { css, styled } from 'twin.macro'

export default {
    TdDivResize: styled.div(()=>[
        css`
            overflow: hidden;
            line-height: 1.3rem;
            max-height: 30rem;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
        `,
        tw`resize-y`
    ]),
    StyledTable: styled.table(()=>[
        tw`
            w-full text-sm lg:text-base overflow-x-scroll xl:overflow-hidden
        `,
        css`
            @media (max-width: 1270px) {
                display:block!important;
                overflow-x: scroll!important;
                scroll-margin-top: 5rem!important;
            }
        `
    ])
}