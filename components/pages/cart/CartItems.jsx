import { CartItem } from './CartItem'

export const CartItems = ({cart, customQuantityChange, handleRemoveItem}) => {
    return (
        <div>
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell"></th>
                        <th className="text-left">Producto</th>
                        <th className="text-left pl-5 lg:pl-0">
                            <span className="lg:hidden" title="Quantity">Cant.</span>
                            <span className="hidden lg:inline">Cantidad</span>
                        </th>
                        <th className="hidden text-right md:table-cell">Precio</th>
                        <th className="text-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item =>
                    <CartItem onChangeQuantity={customQuantityChange} onClickRemove={handleRemoveItem(item.id)}
                        key={item.id} {...item} />)}
                </tbody>
            </table>
        </div>
    )
}
