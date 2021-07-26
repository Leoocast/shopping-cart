import { currencyFormat } from '../../../helpers'
import { InputCounter } from '../../base/InputCounter'

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
        <tr className="mt-5">
            <td className="hidden pb-4 md:table-cell">
                <a href="#">
                    <img src={cover}
                        className="w-20 rounded" alt={name} />
                </a>
            </td>
            <td className="text-left">
                <p className="mb-2 md:ml-3">{name}</p>
                <button onClick={onClickRemove} type="button" className="text-red-700 md:ml-4">
                    <small>(Eliminar producto)</small>
                </button>
            </td>
            <td className="justify-center md:justify-end md:flex mt-6">
                <div className="w-72 h-10">
                    <div className="relative flex flex-row w-full h-8">
                        {InputQuantity()}
                    </div>
                </div>
            </td>
            <td className="w-20 hidden text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                    ${currencyFormat(price)}
                </span>
            </td>
            <td className="w-32 text-right">
                <span className="text-sm lg:text-base font-medium">
                    ${currencyFormat(total)}
                </span>
            </td>
        </tr>
    )
}
