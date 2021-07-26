import tw, {styled} from 'twin.macro'

export default {
    AddToCart: tw.button`w-48 flex h-10 items-center justify-center rounded-md border border-gray-300
                         hover:bg-blue-900 hover:text-white 
                         transition duration-100 ease-in-out
                         transform hover:scale-110 active:scale-95
                    `,
    MinusPlus: styled.button(()=>[
        tw`
            md:(h-5)
            transition p-3 h-10 transform hover:scale-125 active:scale-75
        `,
    ]),
}