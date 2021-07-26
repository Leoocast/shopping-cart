import dynamic from 'next/dynamic' 
import { useCart } from '../../../hooks/useCart'
import { CartHeader } from './CartHeader'

//Component condicional en el front
const CartBody = dynamic(() => import("./CartBody").then(mod => mod.CartBody), {ssr: false})

export const CartPage = () => {
    
    const { cart, getTotals, removeItem, updateQuantity, cleanCart } = useCart()

    const { totalItems, totalPrice } = getTotals()

    const handleCleanCart = () => cleanCart()

    const handleRemoveItem = id => () => removeItem(id) 

    const customQuantityChange = id => newQuantity => updateQuantity(id, newQuantity)
  
    return (
    <>
        <div className="w-full">
            <div className="flex justify-center my-6">
                <div className=" flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y rounded-lg border-2 border-opacity-30">
                    <CartHeader handleCleanCart={handleCleanCart} totalItems={totalItems}/>
                    <CartBody 
                        cart={cart} 
                        totalItems={totalItems} 
                        totalPrice={totalPrice} 
                        customQuantityChange={customQuantityChange} 
                        handleRemoveItem={handleRemoveItem}
                        cleanCart={cleanCart}
                    />
                </div>
            </div>
        </div>
    </>
    )
}