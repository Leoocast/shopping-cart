import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HomeIcon, MenuIcon, XIcon, ShoppingCartIcon} from '@heroicons/react/solid'

import { MeruLogo } from '../resources'

import Link from 'next/link'
import { MenuRoute } from '../../styles/components'
import { useAppContext } from '../context/'
import { currencyFormat } from '../../helpers'
import 'animate.css'


const WithPopOverButton = (Component) => (
    <Popover.Button>
        {Component}
    </Popover.Button>
)

const routes = [
    {
        name: 'Inicio',
        href: '/',
        Icon: () => <HomeIcon className="w-7" size={10}/>
    },
    {
        name: 'Ver carrito',
        href: '/cart',
        Icon: () => <ShoppingCartIcon className="w-7" size={10}/>
    }
]

const Routes = ({isMobile = false}) => 
{
    const [appContext] = useAppContext()

    const totalItems = appContext.cart.reduce((c, n) => c + n.quantity, 0)

    return routes.map(({name, Icon, href}) => {

        const ReturnComponent = () =>
        (
            <Link key={name} href={href}>
                <MenuRoute isMobile={isMobile} isCart={true} className="flex items-center">
                    <span><Icon/></span>
                    <span>{name}</span>
                    {
                        href === '/cart'
                        ? 
                        <span>({currencyFormat(totalItems)})</span> 
                        : <script/>
                    }
                   
                </MenuRoute>
            </Link>
        )

        if(isMobile)
            return WithPopOverButton(ReturnComponent)
            
        return ReturnComponent
    })
}

export const Navbar = () => {

    
    return (
        <Popover className="relative bg-white sticky top-0 z-50 bg-opacity-30 backdrop-blur-lg border-0">
            {({ open }) => (
            <>
                <div style={{maxWidth: "88rem"}} className="mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link href='/'>
                        <a>
                            <MeruLogo />
                        </a>
                    </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Abrir Menú</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Routes />
                    </Popover.Group>
                </div>
                </div>
    
                <NavbarMobile show={open}/>
            </>
            )}
        </Popover>
    )
} 

const NavbarMobile = ({show}) => (
    <Transition
        show={show}
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        >
        <Popover.Panel
            focus
            static
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                <div>
                 <MeruLogo />
                </div>
                <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Cerrar menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                </div>
            </div>
            <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Routes isMobile/>
                </div>
            </div>
            </div>
        </Popover.Panel>
    </Transition>
)