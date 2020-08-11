import React, { Component } from 'react';
class StoreHeader extends Component {
  render() {
    const count = this.props.count;
    return (
      <div className="header">
        <h1 className="storeTitle">STORE</h1>
        <h3 className="cartCount">{'cart ' + count}</h3>
        {/* <img className="cart" alt="error">{count}</img> */}
      </div>
    );
  }
}
export default StoreHeader;
