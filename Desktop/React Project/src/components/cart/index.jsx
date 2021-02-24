import React, { Component } from "react";

import { connect } from "react-redux";


import { removeProductFromCart } from "../../store/actions/actions";

import "./cart.css";
import product from "../product/index";

class Cart extends Component {
    state = {};

    render() {
        let total = 0;
        let price = 0;
        for (let i = 0; i < this.props.cart.length; i++) {
            price = this.props.cart[i].product.price * this.props.cart[i].quantity;
            total += price;
        }
        return (
            <div className="cart-page mt-3 ">
                 <h1 className="todo-title text-center font-weight-bold my-4 ">
                    Your Cart
                </h1>



                <div className=" container product-deck" >
                    <div className="row d-none d-md-flex ">
                        <div className="col-3">
                            <h4>Product</h4>
                        </div>
                        <div className="col-2">
                            <h4>Quantity</h4>
                        </div>
                        <div className="col-2">
                            <h4>Price / Unit</h4>
                        </div>
                        <div className="col-3">
                            <h4>Total</h4>
                        </div>
                        <div className="col-2">
                            <h4>Remove</h4>
                        </div>
                    </div>
                    {this.props.cart.map((item) => (
                        <div className="row  d-none d-md-flex align-items-center mb-4 cart-card">
                            <div className="col-3">
                                <div className="">
                                    <img className="cart-product-image" src={"/images/products/" + item.product.image} alt="" />
                                </div>
                                <div>
                                    {item.product.title}
                                </div>
                            </div>
                            <div className="col-2 mt-2">
                                {item.quantity}
                            </div>
                            <div className="col-2 mt-2">
                                {item.product.price.toFixed(2)}
                            </div>
                            <div className="col-3 mt-2">
                                {(item.product.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="col-2 mt-2">
                                <button
                                    onClick={() => this.removeItem(item.product.id)}
                                    className="btn btn-sm btn-danger rounded-pill px-3 py-2">  Remove

                            </button>
                            </div>
                        </div>
                    ))}
                    {/*  // 2nd design for responsiveness */}

                    {this.props.cart.map((item) => (
                        <div className="row d-flex d-md-none align-items-center my-5 cart-card ">
                            <div className="col-5">
                                <div className="">
                                    <img className="cart-product-image" src={"/images/products/" + item.product.image} alt="" />
                                </div>
                                <div>
                                    <h6>{item.product.title}</h6>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="my-3">
                                    <div className="row">
                                        <div className="col-6 text-left">
                                            Quantity:
                                    </div>
                                        <div className="col-6 text-left">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-left">
                                            Price :
                                    </div>
                                        <div className="col-6 text-left">
                                            {item.product.price.toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-left">
                                            Total:
                                    </div>
                                        <div className="col-6 text-left">
                                            {(item.product.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-10">
                                        <button
                                            onClick={() => this.removeItem(item.product.id)}
                                            className="btn btn-sm w-100 btn-danger rounded-pill px-3 py-1">  Remove

                                   </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                <div className="container w-md-25">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="text-left">TOTAL: </h3>
                            </div>
                            <div className="col-6">
                                <h3 className="text-right">{total.toFixed(2)}$</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    className="btn  w-100 btn-outline-success rounded-pill px-3 py-1">  Checkout
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

    removeItem = (productId) => {
        this.props.removeProductFromCart(productId);
    };
}



var mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps, { removeProductFromCart })(Cart);
