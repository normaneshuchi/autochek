import React from 'react'

function BottomBanner() {
    return (
        <div className="join-w3l1 py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="join-agile text-left p-4">
                            <div className="row">
                                <div className="col-sm-7 offer-name">
                                    <h6>Clean Cars on sale</h6>
                                    <h4 className="mt-2 mb-3">Get yours Now</h4>
                                    <p>Sale up to 25% off</p>
                                </div>
                                <div className="col-sm-5 offerimg-w3l">
                                    <img src="images/bg1.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5">
                        <div className="join-agile text-left p-4">
                            <div className="row ">
                                <div className="col-sm-7 offer-name">
                                    <h6>Free Service</h6>
                                    <h4 className="mt-2 mb-3">Free Service</h4>
                                    <p>for all cars purchased</p>
                                </div>
                                <div className="col-sm-5 offerimg-w3l">
                                    <img src="images/bg1.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBanner