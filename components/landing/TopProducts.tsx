import React from 'react'
import { PopularCar } from '../../types/popular.type'
import Filters from './Filters'
import ProductCard from './ProductCard'

type Props = {
    cars: PopularCar[]
}

function TopProducts({ cars }: Props) {
    return (
        <div className="ads-grid py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
                <div className="row">
                    {/* <!-- product left --> */}
                    <div className="agileinfo-ads-display col-lg-9">
                        <div className="wrapper">
                            {/* <!-- first section --> */}
                            <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                <h3 className="heading-tittle text-center font-italic">Popular Cars</h3>
                                <div className="row">
                                    {cars && cars.map((car, index) => (
                                        <ProductCard car={car} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- //product left -->

                    <!-- product right --> */}
                    <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                        <Filters cars={cars.slice(0, 3)} />
                        {/* <!-- //product right --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts