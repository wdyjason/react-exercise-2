import React from 'react';
import { Component } from 'react';
import ProductUnit from './ProductUnit';
const getUnit = (data, add) => {
  return data.map((i) => {
    return <ProductUnit key={i.name} data={i} add={add}></ProductUnit>;
  });
};
class CategoryManager extends Component {
  render() {
    const { data, category, add } = this.props;
    return (
      <div className="categorManager">
        <h2 className="categroyName">{category}</h2>
        {getUnit(data, add)}
      </div>
    );
  }
}
export default CategoryManager;
