import React from 'react'
import { currencyFormat } from '../../../helpers'

export const CartHeader = ({handleCleanCart, totalItems}) => {

    const productLabel = totalItems > 1 ? 'Productos' : totalItems === 0 ? 'Productos' : 'Producto'

    return (
        <div className="flex justify-between border-b pb-8">
            <div>
            <h1 className="font-semibold text-2xl">Carrito</h1>
                <button onClick={handleCleanCart} type="button" className="text-red-700 md:ml-4">
                    <small>(Limpiar carrito)</small>
                </button>
            </div>
            <h2 className="font-semibold text-2xl">
                {currencyFormat(totalItems)} {productLabel}
            </h2>
        </div>
    )
}
