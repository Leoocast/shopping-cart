import tw, { styled } from 'twin.macro'

export default styled.a(({isMobile, isCart})=>[
    tw`text-base font-medium cursor-pointer`,
    isMobile 
        ? tw`text-gray-900 hover:text-gray-700`
        : tw`text-gray-500 hover:text-gray-900`
]) 