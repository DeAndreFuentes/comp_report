import React, { Component } from 'react';



import "./footer.css"

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="row px-5 py-4 bg-light footer mt-5">
                    <div class="col-md-12">
                        <div class="row d-flex align-items-center">
                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                                <img className="img-blue logo-image img-fluid " src={"/images/logo.png"} alt="LOGO" />
                            </div>
                            <div class="col-md-8 ">
                                <div class="row ">
                                    <div class="col-md-3 mb-4 mb-md-0">
                                        <a>
                                            <h4>About</h4>
                                        </a>
                                        <div>
                                            <a>About us</a>
                                        </div>
                                        <div>
                                            <a>Contact</a>
                                        </div>
                                        <div>
                                            <a>More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 ">

                                    </div>
                                    <div class="col-md-3 mb-4 mb-md-0">
                                        <a>
                                            <h4>Home</h4>
                                        </a>
                                        <div>
                                            <a>Shop</a>
                                        </div>
                                        <div>
                                            <a>Account</a>
                                        </div>
                                        <div>
                                            <a>Cart</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3">

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-12 my-3">
                        <div class="d-flex justify-content-center">
                            <div class="mx-4">
                                <i class="fab fa-linkedin"></i>
                            </div>
                            <div class="mx-4">
                                <i class="fab fa-twitter-square"></i>
                            </div>
                            <div class="mx-4">
                                <i class="fab fa-instagram-square"></i>
                            </div>
                            <div class="mx-4">
                                <i class="fab fa-facebook"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <p class="text-center copyright-text">&copy;2021 - My Store. All rights reserved</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;