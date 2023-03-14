import './ServicesItem.css';

function ServicesItem(props) {
  const { backgroundColor, title } = props;
  return (
    <div className='services__item' style={{ background: backgroundColor }}>
      <div className='services__item__line'></div>
      <p>{title}</p>
    </div>
  );
}

export default ServicesItem;
