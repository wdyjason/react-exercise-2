import React, { Component } from 'react';
class ProductUnit extends Component {
  render() {
    const { price, name, btnDisabled } = this.props.data;
    const addHandle = this.props.add;
    return (
      <div className="productUnit">
        <h3 className="productName">{name}</h3>
        <img
          className="image-size"
          src={require('../assets/product_image_placeholder.png')}
          alt="error"
        />
        <div className="priceAndBtn">
          <p className="phonePrice">{price}</p>
          <button
            className="cartBtn"
            disabled={btnDisabled}
            onClick={() => addHandle(name)}
          >
            add to cart
          </button>
        </div>
      </div>
    );
  }
}
export default ProductUnit;
