import React, { Component } from "react";
import "./catalog.css";
import Product from "../product/index";
import ProductService from "../../services/ProductService";

class Catalog extends Component {
  state = {
    products: [],

    categories: [],

    selectedCategory: "",
  };

  // constructor(){
  //   super();
  // console.log("constructor");
  // }

  render() {
    var productsToDisplay = this.state.products;

    if (this.state.selectedCategory !== "") {
      productsToDisplay = productsToDisplay.filter(
        (prod) => prod.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
         <h1 className="todo-title text-center font-weight-bold my-4 ">
          Shop
        </h1>
        <div className="categories d-flex justify-content-center my-4">
          <button
            onClick={() => this.handleCategoryClick("")}
            className="btn btn-sm  button-primary"
          >
            All Products
          </button>

          {this.state.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => this.handleCategoryClick(cat)}
              className="btn btn-sm  button-primary mx-2 px-3"
            >
              {cat}
            </button>
          ))}

        </div>
        
        <div className="products">
            {productsToDisplay.map((prod) => (
              <Product key={prod.id} data={prod}></Product>
            ))}
          </div>
      </div>
    );
  }

  handleCategoryClick = (cat) => {
    this.setState({ selectedCategory: cat });
  };

  // componentWillMount(){
  //   console.log("will mount");

  // }

  componentDidMount() {
    let service = new ProductService();
    let data = service.getProducts();

    var cats = [];

    for (let i = 0; i < data.length; i++) {
      let prod = data[i];
      if (!cats.includes(prod.category)) {
        cats.push(prod.category);
      }
    }

    this.setState({ products: data, categories: cats });
  }
}

export default Catalog;
