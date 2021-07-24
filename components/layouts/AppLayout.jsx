import React from 'react'

import {Navbar } from '../base/Navbar'

export const AppLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
