import React, { Component } from "react";

import { connect } from "react-redux";


import { removeProductFromCart } from "../../store/actions/actions";

import "./cart.css";
import product from "../product/index";

class Cart extends Component {
    state = {  };

    render() { 
        let total = 0;
        let price = 0;
        for (let i = 0; i< this.props.cart.length; i++){
            price = this.props.cart[i].product.price * this.props.cart[i].quantity;
            total += price;
        }
        return (  
            <div className="cart-page">
                <h1> this is my Cart </h1>



                <div className="product-container" >
                    {this.props.cart.map((item) => (
                        <div>
                            <h3>{item.product.title}</h3>
                            <label>{item.quantity}</label>
                            <label>${item.product.price.toFixed(2)}</label>
                            <label>${(item.product.price * item.quantity).toFixed(2)}</label>
                        
                            
                            <button
                            onClick={() => this.removeItem(item.product.id)}
                            className="btn btn-sm btn-danger">  remove

                            </button>
                            </div>
                    ))}
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
 
export default  connect(mapStateToProps, {  removeProductFromCart }) (Cart);
