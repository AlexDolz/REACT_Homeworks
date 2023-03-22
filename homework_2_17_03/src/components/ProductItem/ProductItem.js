import { useState } from 'react';
import s from './ProductItem.module.css';

const ProductItem = ({ name, price, count, id, removeProduct }) => {
  let [amount, setAmount] = useState(count);

  const productStyles = {
    background: amount <= 0 ? '#f35f5f' : 'floralwhite',
    border: amount <= 0 ? '2px solid #f35f5f' : '2px solid cadetblue',
    color: amount <= 0 ? 'white' : 'black',
  };
  const decrement = event => {
    event.preventDefault();
    setAmount(--amount);
    if (amount <= 0) {
      amount = 0;
      setAmount(amount);
    }
  };
  const increment = event => {
    event.preventDefault();
    setAmount(++amount);
  };

  const handleDoubleClick = event => {
    if (event.target.tagName === 'BUTTON') {
      return;
    }
    removeProduct(id);
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={s.product__item}
      style={productStyles}
    >
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <div className={s.count__container}>
        <button onClick={decrement}>-</button>
        <p>{amount}</p>
        <button onClick={increment}>+</button>
      </div>
      <div className={s.out__of__stock}>
        {amount <= 0 ? <p>Out of stock</p> : <p></p>}
      </div>
    </div>
  );
};

export default ProductItem;
