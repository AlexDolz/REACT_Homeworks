import { useState } from 'react';
import { data } from '../../data/products';
import ProductItem from '../ProductItem/ProductItem';
import './App.css';

const App = () => {
  let [products, setProducts] = useState(data);

  // Solution with 3 prompt
  // const addProduct = () => {
  //   let newProduct = {
  //     id: Date.now(),
  //     name: prompt(),
  //     price: prompt(),
  //     count: prompt(),
  //   };
  //   setProducts([...products, newProduct]);
  // };

  // Solution with 1 prompt
  const addProduct = () => {
    const productInfo = prompt(
      'Enter product information (name, price, count):'
    );
    if (productInfo === null) {
      return;
    }
    const productFields = productInfo.split(',');

    if (productFields.length !== 3) {
      alert('Please enter all product information separated by commas.');
      return;
    }

    const [name, price, count] = productFields;
    if (!isNaN(name)) {
      alert('Please enter valid name of product that contains letters only.');
      return;
    }
    if (isNaN(price) || isNaN(count)) {
      alert(
        'Please enter valid numeric values for the price and count fields.'
      );
      return;
    }
    const newProduct = { id: Date.now(), name, price, count };
    setProducts([...products, newProduct]);
  };

  const removeProduct = id => {
    const newProducts = products.filter(elem => elem.id !== id);
    setProducts(newProducts);
  };

  return (
    <div>
      <button className='add__product' onClick={addProduct}>
        Add new product
      </button>
      <div className='container'>
        <div className='app'>
          {products.map(elem => (
            <ProductItem
              key={elem.id}
              {...elem}
              removeProduct={removeProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
