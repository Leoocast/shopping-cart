import tw from 'twin.macro'

export default {
    Wrapper: tw.div`min-w-min flex items-start p-5 lg:p-10 overflow-hidden relative`,

    Container: tw.div`w-full max-w-6xl rounded bg-white shadow-xl text-gray-800 relative md:text-left`,
    
    AddToCartButton: tw.button`
                    bg-blue-300 opacity-75 text-blue-900 rounded-full px-10 py-2 font-semibold
                    hover:text-gray-900  hover:opacity-100 
                    transition 
                    transform hover:scale-105 active:scale-95
                    `
}