import React from 'react'
import { Buttons, Text, ProductContainer } from '../../../styles/components'
import { currencyFormat } from '../../../helpers'
import { ProductImage } from './ProductImage'

const Product = ({id, name, cover, price}) => {

    return (
        <ProductContainer >
            <div className="flex-auto w-56 h-56 relative">
                <ProductImage cover={cover} name={name}/>
            </div>
            <form className="flex-auto p-4">
            <div className="flex justify-start text-xl font-semibold mb-1">
                {currencyFormat(price)}
            </div>
            <div className="text-xl text-gray-700 mb-5 text-left">
                <Text.CartItemName>
                    {name}
                </Text.CartItemName>
            </div>
            <div className="flex space-x-3 mb-4 text-sm font-medium">
                <div className="flex-auto flex justify-end space-x-3">
                    <Buttons.AddToCart type="button">
                        Agregar al carrito
                    </Buttons.AddToCart>
                </div>
            </div>
            </form>
        </ProductContainer>
    )
}

export default Product