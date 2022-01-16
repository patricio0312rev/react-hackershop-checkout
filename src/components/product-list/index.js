import React, {Component} from "react";
import Product from "../product";
import "./index.css";

export default class ProductList extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {this.props.products.map((product, i) => {
                    return (
                        <Product idx={i} key={'product-' + i} product={product} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
                    )
                })}

            </div>

        );
    }
}

