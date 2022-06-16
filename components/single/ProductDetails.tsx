import React, { useState } from 'react'
import { CarMedia } from '../../types/media.type';
import { SingleCar } from '../../types/single-car.type';
import Gallery from './Gallery';


type Props = {
    car: SingleCar,
    media: CarMedia
}

function ProductDetails({ car, media }: Props) {
    return (
        <div className="banner-bootom-w3-agileits py-5">
            <div className="container py-xl-4 py-lg-2">
                <div className="row">
                    <div className="col-lg-5 col-md-8 single-right-left ">
                        <Gallery media={media.carMediaList} />
                    </div>

                    <div className="col-lg-7 single-right-left simpleCart_shelfItem">
                        <h3 className="mb-3">{car.carName}</h3>
                        <p className="mb-3">
                            <span className="item_price">Ksh. {car.marketplacePrice.toLocaleString(undefined, {maximumFractionDigits: 2})} </span>
                            <del className="mx-2 font-weight-light"> Ksh. {car.marketplaceOldPrice.toLocaleString(undefined, {maximumFractionDigits: 2})} </del>
                            <label>Free service on purchase</label>
                        </p>
                        <div className="single-infoagile">
                            <ul>
                                
                                <li className="mb-3">
                                    Mileage: {car.mileage.toLocaleString(undefined, {maximumFractionDigits: 2})} km
                                </li>
                                <li className="mb-3">
                                    Year of Manufacture: {car.year}
                                </li>
                                <li className="mb-3">
                                    Fuel Type: {car.fuelType}
                                </li>
                                <li className="mb-3">
                                    Transmission: {car.transmission}
                                </li>
                            </ul>
                        </div>
                        <div className="product-single-w3l">
                            {car.hasWarranty && <p className="my-3">
                                <i className="far fa-hand-point-right mr-2"></i>
                                <label></label> Warranty</p>}
                            <ul className='mt-4'> 
                                <li className="mb-1">
                                    City : {car.city}
                                </li>
                                <li className="mb-1">
                                    state: {car.state}
                                </li>
                                <li className="mb-1">
                                   Country : {car.country}
                                </li> 
                                
                                {car.sold && <li className="mb-1 text-danger">
                                    Sold
                                </li>}
                            </ul>
                           
                        </div>
                        <div className="occasion-cart">
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                    <fieldset>
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="add" value="1" />
                                        <input type="hidden" name="business" value=" " />
                                        <input type="hidden" name="item_name" value="Samsung Galaxy J7 Prime" />
                                        <input type="hidden" name="amount" value="200.00" />
                                        <input type="hidden" name="discount_amount" value="1.00" />
                                        <input type="hidden" name="currency_code" value="USD" />
                                        <input type="hidden" name="return" value=" " />
                                        <input type="hidden" name="cancel_return" value=" " />
                                        <input type="submit" name="submit" value="Purchase Now" className="button" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails