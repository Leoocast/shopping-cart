import { currencyFormat } from '../../../helpers'
import { InputCounter } from '../../base/InputCounter'
import { Cart } from '../../../styles/components'

export const CartItem = ({id, name, cover, price, quantity, onClickRemove, onChangeQuantity}) => {

    const quantityHandler = {
        initialState: quantity,
        min: 1,
        max: 125000,
        customQuantityChange: onChangeQuantity(id)
    }

    const InputQuantity = InputCounter({exportQuantity: false}, quantityHandler)

    const total = price * (quantity === '' ? 0 : quantity)

    return (
        <tr className="mt-5 ">
            <td className="pb-4 lg:table-cell w-32">
                <a href="#">
                    <img src={cover}
                        className="w-20 rounded" alt={name} />
                </a>
            </td>
            <td className="text-left">
                <Cart.TdDivResize className="">
                    <p className="mb-2 md:ml-3">{name}</p>
                </Cart.TdDivResize>
                <button onClick={onClickRemove} type="button" className="text-red-700 text-left xl:ml-4">
                    <small>(Eliminar producto)</small>
                </button>
            </td>
            <td className="justify-center xl:justify-end xl:flex mt-6">
                <div className="w-72 h-10">
                    <div className="relative flex flex-row w-full h-8">
                        {InputQuantity()}
                    </div>
                </div>
            </td>
            <td className="w-20 text-right xl:table-cell">
                <span className="text-sm xl:text-base font-medium">
                    ${currencyFormat(price)}
                </span>
            </td>
            <td className="w-36 pl-7 text-right">
                <span className="text-sm xl:text-base font-medium">
                    ${currencyFormat(total)}
                </span>
            </td>
        </tr>
    )
}
