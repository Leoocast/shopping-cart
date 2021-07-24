import React from 'react'
import Image from 'next/image'

const Product = ({id, name, cover, price}) => {


    return (
        <div className="flex shadow-md m-5">
            <div className="flex-none w-48 relative">
            <img src={cover} alt={name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <form className="flex-auto p-6">
            <div className="flex flex-wrap mb-7">
                <h1 className="flex text-xl font-semibold">
                Classic Utility Jacket
                </h1>
            </div>
            <div className="flex justify-end text-xl font-semibold text-gray-500 mb-5">
                $ {price}
                </div>
            <div className="flex space-x-3 mb-4 text-sm font-medium">
                <div className="flex-auto flex justify-end space-x-3">
                <button className="w-1/2 flex  h-10 items-center justify-center rounded-md border border-gray-300" type="button">Add to cart</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Product