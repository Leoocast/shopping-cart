import { CartItems } from './CartItems'
import { CartSummary } from './CartSummary'
import { CartEmpty } from './CartEmpty'

export const CartBody = ({totalItems, totalPrice, cart, customQuantityChange, handleRemoveItem, cleanCart}) => {

    return totalItems === 0
        ? <CartEmpty />
        : <div className="flex-1">
            <CartItems cart={cart} customQuantityChange={customQuantityChange} handleRemoveItem={handleRemoveItem}/>
            <hr className="pb-6 mt-6" />
            <CartSummary cleanCart={cleanCart} subTotal={totalPrice} /> 
        </div>
}