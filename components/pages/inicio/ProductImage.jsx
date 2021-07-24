import React from 'react'
import Image from 'next/image'

export const ProductImage = ({cover, name}) => (
    <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={cover}
        alt={name}
        layout="fill"
        placeholder="blur"
        blurDataURL=" https://media-exp3.licdn.com/dms/image/C560BAQEAAzMK3DblDw/company-logo_200_200/0/1614028253513?e=2159024400&v=beta&t=A8IuzBoUD_343dThmIYL7JHXNxQa_DfHLQwYY-WbUwg"
    />
)