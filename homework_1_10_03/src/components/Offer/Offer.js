import styles from './Offer.module.css';
import offer_img from './media/offer_img.png';

function Offer() {
  return (
    <div className={styles.offer}>
      <div>
        <h2>Что мы предлагаем</h2>
        <p>
          В нашей мастерской можно выполнить комплексное техническое
          обслуживание велосипеда, ремонт и настройку всех его узлов,
          шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
          избежать многих проблем и дорогого ремонта. Все работы выполняем
          качественно и с душой.{' '}
        </p>
      </div>
      <div>
        <img src={offer_img} alt='bicycle img' />
      </div>
    </div>
  );
}

export default Offer;
