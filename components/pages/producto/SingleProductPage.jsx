import { SingleProduct, Buttons } from '../../../styles/components'
import { InputCounter } from '../../base/InputCounter'
import { BreadCrumbs } from '../../base/BreadCrumbs'
import { useCart } from '../../../hooks/useCart'

const Price = ({value}) => (
    <>
        <span className="text-2xl leading-none align-baseline">$</span>
        <span className="font-bold text-5xl leading-none align-baseline">{value[0]}</span>
        <span className="text-2xl leading-none align-baseline">.{value[1]} MXN *</span>
    </>
) 

export const SingleProductPage = ({id, name, price, cover}) => {

    const [quantity, InputQuantity] = InputCounter()

    const { addItem } = useCart()

    const customizedPrice = price.split('.')

    const onClickAddToCart = () => {

        const product = {
            id,
            name,
            price,
            cover,
            quantity
        }

        addItem(product)
    }

  return (
        <>
            <BreadCrumbs levelName={name}/>
            <SingleProduct.Wrapper>
                <SingleProduct.Container>
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={cover} className="w-full relative z-10" alt=""/>
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{name}</h1>
                                <p className="text-sm">{name} desc</p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5 flex flex-wrap justify-between items-center">
                                    <div className="flex flex-col w-1/5 items-left">
                                        <div className="text-md text-bold text-gray-500 mb-5">
                                            Cantidad
                                        </div>
                                        <div className="text-2xl flex flex-row">
                                            {InputQuantity()}
                                        </div>
                                    </div>
                                    <div className="mr-5">
                                        <div className="text-md text-bold text-gray-500 mb-5">
                                            Total
                                        </div>
                                        <div className="">
                                            <Price value={customizedPrice}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 mr-10 text-right text-gray-400">*El precio contempla importación, envío e I.V.A.</div>
                                <div className="inline-block align-bottom mt-6 flex justify-end mr-12">
                                    <Buttons.AddToCart onClick={onClickAddToCart}>
                                        AGREGAR AL CARRITO
                                    </Buttons.AddToCart>
                                </div>
                            </div>
                        </div>
                    </div>
                </SingleProduct.Container>
            </SingleProduct.Wrapper>
        </>
    )
}