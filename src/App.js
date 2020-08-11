import React, { Component } from 'react';
import './App.scss';
import StoreHeader from './components/StoreHeader';
import CategoryManager from './components/CategoryManager';

const requsetUrl = ' http://localhost:3000/products';

async function fetchData(url) {
  return await fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('error');
    })
    .catch((error) => console.error(error));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      hwProducts: [],
      ipProducts: [],
      count: 0,
    };
  }
  componentDidMount() {
    fetchData(requsetUrl).then((result) => {
      result.map((i) => {
        return Object.assign(i, { btnDisabled: false });
      });
      const hwProducts = result.filter((i) => i.category === 'HUAWEI');
      const ipProducts = result.filter((i) => i.category === 'iPhone');
      this.setState({
        hwProducts,
        ipProducts,
        count: 0,
      });
    });
  }
  addToCart = (name) => {
    let count = this.state.count;
    const hwProducts = this.state.hwProducts.map((i) => {
      if (i.name === name) {
        count++;
        return {
          ...i,
          btnDisabled: true,
        };
      }
      return { ...i };
    });

    const ipProducts = this.state.ipProducts.map((i) => {
      if (i.name === name) {
        count++;
        return {
          ...i,
          btnDisabled: true,
        };
      }
      return { ...i };
    });
    this.setState({
      hwProducts,
      ipProducts,
      count,
    });
  };

  render() {
    const { hwProducts, ipProducts, count } = this.state;
    return (
      <main className="app">
        <StoreHeader count={count}></StoreHeader>
        <CategoryManager
          className="iphone"
          data={ipProducts}
          category="iPhone"
          add={this.addToCart}
        ></CategoryManager>
        <CategoryManager
          className="huawei"
          data={hwProducts}
          category="HUAWEI"
          add={this.addToCart}
        ></CategoryManager>
      </main>
    );
  }
}

export default App;
