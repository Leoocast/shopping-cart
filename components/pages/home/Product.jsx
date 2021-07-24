import React from 'react'
import { Buttons, Text } from '../../../styles/components'
import { currencyFormat } from '../../../helpers'

import Image from 'next/image'

const Product = ({id, name, cover, price}) => {

    return (
        <div className="flex shadow-md m-5">
            <div className="flex-none w-48 relative">
            <Image
                className="absolute inset-0 w-full h-full object-cover"
                src={cover}
                alt={name}
                layout="fill"
            />
            </div>
            <form className="flex-auto p-6">
            <div className="flex flex-wrap mb-7">
                <Text.CartItemName>
                    {name}
                </Text.CartItemName>
            </div>
            <div className="flex justify-end text-xl font-semibold text-gray-500 mb-5">
                {currencyFormat(price)}
                </div>
            <div className="flex space-x-3 mb-4 text-sm font-medium">
                <div className="flex-auto flex justify-end space-x-3">
                    <Buttons.AddToCart type="button">
                        Agregar al carrito
                    </Buttons.AddToCart>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Product