import { SingleProduct } from '../../../styles/components'

import { InputCounter } from '../../base/InputCounter'
import { BreadCrumbs } from '../../base/BreadCrumbs'

import { useCart } from '../../../hooks/useCart'
import { currencyFormat, messages } from '../../../helpers'

import { SingleProductSeo } from '../../seo//SingleProductSeo'

const Price = ({value}) => (
    <>
        <span className="text-xl leading-none align-baseline price">$</span>
        <span className="font-bold text-2xl leading-none align-baseline price">{value[0]}</span>
        
        <span className="text-xl leading-none align-baseline price">
            {value[1] !== undefined ? '.' + value[1] + ' MXN *' : ' MXN *'}
        </span>
    </>
) 

export const SingleProductPage = ({id, name, price, cover}) => {

    const [quantity, InputQuantity, setQuantity, blurAffected, setBlurAffected] = InputCounter({exportQuantity: true})

    const { addItem, getItem } = useCart()

    const customizedPrice = currencyFormat(price * quantity).split('.')

    const hasReachedQuantity = (product, existingProduct) => {

        if(!existingProduct)
            return false

        const realQuantity = product.quantity + existingProduct.quantity

  
        if(realQuantity > 125000){

            const exact125000 = 125000 - existingProduct.quantity

            product.quantity = exact125000

            messages.SingleProduct.quantityReached(
                {
                    onClose(){
                        addItem(product)
                    }
                }
            )

            setQuantity(1)

            return true
        }

        return false

    }

    const onClickAddToCart = e => {

        //Si el input esta vacío, que no agregue uno por accidente.
        if(blurAffected && quantity === 1){
            setBlurAffected(false)
            e.preventDefault()
            return
        }

        const product = {
            id,
            name,
            price,
            cover,
            quantity: parseInt(quantity)
        }

        const existingProduct = getItem(id)

        if(hasReachedQuantity(product, existingProduct))
            return

        addItem(product)
        setQuantity(1)
    }

  return (
        <>
            <SingleProductSeo name={name} cover={cover}/>
            <BreadCrumbs levelName={name}/>
            <SingleProduct.Wrapper>
                <SingleProduct.Container>
                    <div className="lg:flex items-center -mx-10">
                        <SingleProduct.ImageWrapper>
                            <div className="relative">
                                <img src={cover} className="z-10" alt=""/>
                            </div>
                        </SingleProduct.ImageWrapper>
                        <div className="w-full lg:w-1/2 px-10">
                            <SingleProduct.Title>
                                <h1>{name}</h1>
                            </SingleProduct.Title>
                            <p className="text-sm mb-5 text-left m-3 md:ml-3">{name} desc</p>
                            <SingleProduct.QuantityTotalWrapper>
                                <SingleProduct.Quantity>
                                    <div className="text-md text-left text-bold text-gray-500 mb-5">
                                        Cantidad
                                    </div>
                                    <div className="text-2xl flex flex-row">
                                        {InputQuantity()}
                                    </div>
                                </SingleProduct.Quantity>
                                <SingleProduct.Total className="">
                                    <div className="text-md text-bold text-gray-500 mb-5 ">
                                        Total
                                    </div>
                                    <div className="price">
                                        <Price value={customizedPrice}/>
                                    </div>
                                </SingleProduct.Total>
                            </SingleProduct.QuantityTotalWrapper> 
                            <div className="mt-5 mr-10 text-right text-gray-400">*El precio contempla importación, envío e I.V.A.</div>
                            <div className="inline-block align-bottom mt-6 flex justify-end mr-12">
                                <SingleProduct.AddToCartButton onClick={onClickAddToCart}>
                                    AGREGAR AL CARRITO
                                </SingleProduct.AddToCartButton>
                            </div>
                        </div>
                    </div>
                </SingleProduct.Container>
            </SingleProduct.Wrapper>
        </>
    )
}