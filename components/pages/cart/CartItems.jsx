import { CartItem } from './CartItem'
import { Cart } from '../../../styles/components'

export const CartItems = ({cart, customQuantityChange, handleRemoveItem}) => {
    return (
        <div>
            <Cart.StyledTable>
                <thead>
                    <tr className="h-12 uppercase">
                        <th ></th>
                        <th className="text-left">Producto</th>
                        <th className="text-left">Cantidad</th>
                        <th className="text-right">Precio</th>
                        <th className="text-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item =>
                    <CartItem onChangeQuantity={customQuantityChange} onClickRemove={handleRemoveItem(item.id)}
                        key={item.id} {...item} />)}
                </tbody>
            </Cart.StyledTable>
        </div>
    )
}
