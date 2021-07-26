import { currencyFormat } from '../../../helpers'
import { InputCounter } from '../../base/InputCounter'

export const CartItemNew = ({id, name, cover, price, quantity, onClickRemove, onChangeQuantity}) => {

    const quantityHandler = {
        initialState: quantity,
        min: 1,
        max: 125000,
        customQuantityChange: onChangeQuantity(id)
    }

    const InputQuantity = InputCounter({exportQuantity: false}, quantityHandler)

    const total = price * (quantity === '' ? 0 : quantity)

    return (
      <div>
          
      </div>
    )
}
