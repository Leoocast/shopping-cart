import { CartItem } from './CartItem'
import { CartItemNew } from './CartItemNew'
import tw, { styled, css } from 'twin.macro'

const StyledThead = styled.thead(()=>[
    css`
        @media (min-width: 1280px) {
            tr:not(:first-child) {
                display: none;
            }
        }
    `
])

const StyledTable = styled.table(()=>[
    css`
        @media (min-width: 1280px) {
            display: inline-table !important;
        }
    `
])

export const CartItems = ({cart, customQuantityChange, handleRemoveItem}) => {
    return (
        <div>
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell"></th>
                        <th className="text-left">Producto</th>
                        <th className="text-left pl-5 lg:pl-0">
                            <span className="xl:hidden" title="Quantity">Cant.</span>
                            <span className="hidden xl:inline">Cantidad</span>
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

            {/* NewTable */}
            <div className="flex items-center justify-center">
                <StyledTable className="w-full flex flex-row flex-no-wrap bg-white rounded-lg overflow-hidden lg:shadow-lg my-5">
                   <StyledThead className=" bg-blue-900 text-white">
                        <tr className="bg-teal-400 flex flex-col flex-no wrap xl:table-row rounded-l-lg xl:rounded-none mb-2 xl:mb-0">
                            <th className="p-3 text-left" width="90px"></th>
                            <th className="p-3 text-left">Producto</th>
                            <th className="p-3 text-left" width="110px">Cantidad</th>
                            <th className="p-3 text-right" width="110px">Precio</th>
                            <th className="p-3 text-right" width="110px">Total</th>
                        </tr>
                        <tr className="bg-teal-400 flex flex-col flex-no wrap xl:table-row rounded-l-lg xl:rounded-none mb-2 xl:mb-0">
                            <th className="p-3 text-left" width="90px"></th>
                            <th className="p-3 text-left">Producto</th>
                            <th className="p-3 text-left" width="110px">Cantidad</th>
                            <th className="p-3 text-right" width="110px">Precio</th>
                            <th className="p-3 text-right" width="110px">Total</th>
                        </tr>
                        <tr className="bg-teal-400 flex flex-col flex-no wrap xl:table-row rounded-l-lg xl:rounded-none mb-2 xl:mb-0">
                            <th className="p-3 text-left" width="90px"></th>
                            <th className="p-3 text-left">Producto</th>
                            <th className="p-3 text-left" width="110px">Cantidad</th>
                            <th className="p-3 text-right" width="110px">Precio</th>
                            <th className="p-3 text-right" width="110px">Total</th>
                        </tr>
                    </StyledThead>
                    <tbody className="flex-1 sm:flex-none">

                        {cart.map(item =>(
                              <tr className="flex flex-col flex-no wrap xl:table-row mb-2 xl:mb-0">
                                <td className="border-grey-light border hover:bg-gray-100 p-3 text-left">
                                <img src={item.cover}
                                        className="w-20 rounded" alt={item.name} />
                                    </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 text-left">{item.name}
                                <p className="transition text-sm p-1 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                    (Eliminar producto)
                                </p>
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                                    <input type="text" />
                                </td>
                                <td className="text-right xl:text-left font-semibold border-grey-light border hover:bg-gray-100 p-3 truncate">
                                    {item.price}
                                </td>
                                <td className="text-right xl:text-left font-semibold border-grey-light border hover:bg-gray-100 p-3 truncate">
                                    {(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                        {/* <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Eliminar</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>
                        </tr> */}
                    </tbody>
                </StyledTable>
            </div>
        </div>
    )
}
