import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Make } from '../../types/make.type'
import { PopularCar } from '../../types/popular.type'

type Props = {
    car: Make
}

function PopularCard({ car }: Props) {
    const [src, setSrc] = React.useState(car.imageUrl)
    return (
        <div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                    <Image onError={() => setSrc('/images/error.png')} width={60} height={60} src={src} alt={car.name} />
                    <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                            <a className="link-product-add-cart">View All</a>
                        </div>
                    </div>
                </div>
                <div className="item-info-product text-center border-top mt-4">
                    <h4 className="pt-1">
                        <a>{car.name}</a>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default PopularCard