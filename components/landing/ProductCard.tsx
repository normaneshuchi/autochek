import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PopularCar } from '../../types/popular.type'

type Props = {
    car: PopularCar
}

function ProductCard({ car }: Props) {
    return (
        <div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                    <Image layout='responsive' width={120} height={120} src={car.imageUrl} alt={car.title} />
                    <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                            <Link href={{pathname: 'single', query: {id: car.id}}}>
                            <a href="single.html" className="link-product-add-cart">Quick View</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="item-info-product text-center border-top mt-4">
                    <h4 className="pt-1">
                        <a>{car.title}</a>
                    </h4>
                    <div className="info-product-price my-2">
                        <span className="item_price">Ksh. {car.loanValue}</span>
                        {/* <del>$280.00</del> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard