import { type } from 'os'
import React from 'react'
import { PopularCar } from '../../types/popular.type'
import Image from 'next/image';

type Props = {
    cars: PopularCar[]
}

function Filters({ cars }: Props) {
    return (
        <div className="side-bar p-sm-4 p-3">
            <div className="search-hotel border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                <form action="#" method="post">
                    <input type="search" placeholder="Product name..." name="search" />
                    <input type="submit" value=" " />
                </form>
            </div>
            {/* <!-- price --> */}
            <div className="range border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">Price</h3>
                <div className="w3l-range">
                    <ul>

                        <li>
                            <a href="#">Ksh. 500,000 - Ksh. 1,000,000</a>
                        </li>
                        <li className="my-1">
                            <a href="#">Ksh. 1,000,000 - Ksh.4,000,000</a>
                        </li>
                        <li>
                            <a href="#">$20,000 $30,000</a>
                        </li>
                        <li className="mt-1">
                            <a href="#">Over Ksh. 4,000,000</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- //price -->
                    <!-- discounts --> */}
            <div className="left-side border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">Discount</h3>
                <ul>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">5% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">10% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">20% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">30% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">50% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">60% or More</span>
                    </li>
                </ul>
            </div>
            {/* <!-- //discounts -->
                    <!-- reviews --> */}
            {/* <!-- //reviews -->
                    <!-- electronics --> */}

            {/* <!-- arrivals --> */}
            <div className="left-side border-bottom py-2">
                <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                <ul>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 30 days</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 90 days</span>
                    </li>
                </ul>
            </div>
            {/* <!-- //arrivals --> */}
            {/* <!-- best seller --> */}
            <div className="f-grid py-2">
                <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                <div className="box-scroll">
                    <div className="scroll">
                        {cars && cars.map((car, index) => (
                            <div className="row" key={index}>
                                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                    <Image width={60} height={60} src={car.imageUrl} alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                    <a href="">{car.title}</a>
                                    <a href="" className="price-mar mt-2">Ksh. {car.loanValue}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- //best seller --> */}
        </div>
    )
}

export default Filters