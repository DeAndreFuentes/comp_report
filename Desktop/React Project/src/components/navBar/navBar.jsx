import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import './navBar.css';

class NavBar extends Component {
    
    render() { 
        return ( 
           <React.Fragment>
             <div className="top-bar">
        <div className="top-bar-left">
            <span><i className="fas fa-phone-volume"></i>&nbsp;+1 (888)-888-8888</span>
            <span><i className="fas fa-map-marker-alt"></i>&nbsp;USA</span>
            <span><i className="far fa-envelope"></i>&nbsp;DF@gmail.com</span>
        </div>

        <div className="top-bar-right">
            <span><i className="fab fa-facebook-f"></i></span>
            <span><i className="fab fa-twitter"></i></span>
            <span><i className="fab fa-google-plus-g"></i></span>
        </div>
    </div>

    <nav className="container navbar navbar-expand-lg navbar-light bg-white py-3">
        <a className="navbar-brand " href="#"><img className="main-logo" src={"/images/logo.png"}  alt="Your LOGO HERE!" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {/* <li><a className="navbar-brand" href="#"><img src="../images/logo.png" width="120" alt="Your LOGO HERE!" /></a></li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item  mx-2">
                        <Link className="nav-link " to="/" id="navbar-right-side-other">HOME <span
                                className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mx-2">
                        <Link className="nav-link " to="/catalog" id="navbar-right-side-other">SHOP <span
                                className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mx-2">
                        <Link className="nav-link" to="#" id="navbar-right-side-other">ABOUT <span
                                className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mx-2">
                        <Link className="nav-link" to="#" id="navbar-right-side-other">CONTACT <span
                                className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mx-2">
                        <Link className="nav-link" to="/ToDo" id="navbar-right-side-other">ToDo <span
                                className="sr-only">(current)</span></Link>
                    </li>
                    
                </ul>
                <button className="mx-2" id="navbar-right-download-button">SHOP NOW</button>

                {/* <i className="fas fa-search mx-3" id="navbar-right-side-other"></i> */}
                <i className="fas fa-shopping-cart mx-3" id="navbar-right-side-other"></i>

                <Link  className="btn button-primary" to="/cart">
                    View Cart
                    Cart: {this.props.count}
                </Link>
            </form>
        </div>
    </nav>

           </React.Fragment>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.cart.length,
    };
};

 
export default connect(mapStateToProps, null)(NavBar);


