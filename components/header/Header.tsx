import React from 'react'

function Header() {
    return (
        <div>
            {/* top header */}
            <div className="agile-main-top">
                <div className="container-fluid">
                    <div className="row main-top-w3l py-2">
                        <div className="col-lg-4 header-most-top">
                            <p className="text-white text-lg-left text-center">Offer Zone Top Deals & Discounts
                                <i className="fas fa-shopping-cart ml-1"></i>
                            </p>
                        </div>
                        <div className="col-lg-8 header-right mt-lg-0 mt-2">
                            <ul>
                                <li className="text-center border-right text-white">
                                    <a className="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
                                        <i className="fas fa-map-marker mr-2"></i>Select Location</a>
                                </li>
                                <li className="text-center border-right text-white">
                                    <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                                        <i className="fas fa-truck mr-2"></i>Track Order</a>
                                </li>
                                <li className="text-center border-right text-white">
                                    <i className="fas fa-phone mr-2"></i> 001 234 5678
                                </li>
                                <li className="text-center border-right text-white">
                                    <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                                        <i className="fas fa-sign-in-alt mr-2"></i> Log In </a>
                                </li>
                                <li className="text-center text-white">
                                    <a href="#" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                                        <i className="fas fa-sign-out-alt mr-2"></i>Register </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* top header */}
            {/* login */}
            <div className="modal fade" id="exampleModal" role="dialog" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title text-center">Log In</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form action="#" method="post">
						<div className="form-group">
							<label className="col-form-label">Username</label>
							<input type="text" className="form-control" placeholder=" " name="Name" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Password</label>
							<input type="password" className="form-control" placeholder=" " name="Password" />
						</div>
						<div className="right-w3l">
							<input type="submit" className="form-control" value="Log in"/>
						</div>
						<div className="sub-w3l">
							<div className="custom-control custom-checkbox mr-sm-2">
								<input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
								<label className="custom-control-label" >Remember me?</label>
							</div>
						</div>
						<p className="text-center dont-do mt-3">Don't have an account?
							<a href="#" data-toggle="modal" data-target="#exampleModal2">
								Register Now</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
    {/* register */}
    <div className="modal fade" id="exampleModal2" role="dialog" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">Register</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form action="#" method="post">
						<div className="form-group">
							<label className="col-form-label">Your Name</label>
							<input type="text" className="form-control" placeholder=" " name="Name" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Email</label>
							<input type="email" className="form-control" placeholder=" " name="Email" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Password</label>
							<input type="password" className="form-control" placeholder=" " name="Password" id="password1" />
						</div>
						<div className="form-group">
							<label className="col-form-label">Confirm Password</label>
							<input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" />
						</div>
						<div className="right-w3l">
							<input type="submit" className="form-control" value="Register"/>
						</div>
						<div className="sub-w3l">
							<div className="custom-control custom-checkbox mr-sm-2">
								<input type="checkbox" className="custom-control-input" id="customControlAutosizing2"/>
								<label className="custom-control-label" >I Accept to the Terms & Conditions</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

    {/* <!-- navigation --> */}
	<div className="navbar-inner">
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto text-center mr-xl-5">
						<li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
							<a className="nav-link" href="index.html">Home
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">Contact Us</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	{/* <!-- //navigation --> */}

        </div>
    )
}

export default Header