import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuantityPicker from "../quantityPicker/quantityPicker";
import { addProductToCart } from "../../store/actions/actions";


import "./product.css";

class Product extends Component {
    state = { 
        minimum: this.props.data.minimum || 1,
        price: this.props.data.price,
        total: this.props.data.price,
        quantity: this.props.data.minimum || 1,

     };
    render() { 
        return (  
            <div className="product">
                <h4>This will be a product</h4>
                <img className="w-100 product-image" src={"/images/products/" + this.props.data.image} alt="Product Here"></img>
                <h4>{this.props.data.title}</h4>
                
                <p>  Product description </p>
                <h6> Total: ${this.state.total.toLocaleString("en-US")}</h6>
                <h6> price: ${this.state.price.toLocaleString("en-US")}</h6>

                <QuantityPicker 
                min={this.state.minimum} 
                onValueChange={this.handleValueChange} 
                ></QuantityPicker> 


                <button onClick={this.handleAppProduct} className="btn btn-sm btn-primary">
                    <i className="fa fa-cart-plus" aria-hidden="true"> </i>

                </button>
                
            </div>
        );
    }

    handleAppProduct = () => {
var prodInCart = {
    product: this.props.data,
    quantity: this.state.quantity,
}
        
        this.props.addProductToCart( prodInCart);

    };


    handleValueChange = (qnty) => {
console.log("value has changed", qnty);
let total = this.state.price * qnty;
this.setState({ total: total, quantity: qnty});    
    };
}
 
export default  connect(null,{ addProductToCart })(Product);