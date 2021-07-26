export const CartEmpty = () => {
    return (
        <div className="flex justify-center">
            <div>
                <h1 className="text-4xl text-gray-500 font-semibold mt-5 mb-5">Su carrito está vacío</h1>
                <img className="w-60" src="https://ifal.extranet-aec.com/img/empty-cart.png" alt="" />
            </div>
        </div>
    )
}
