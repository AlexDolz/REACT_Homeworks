import styles from './Rental.module.css';
import rental_img from './media/rental_img.png';

function Rental() {
  return (
    <div className={styles.rental}>
      <img src={rental_img} alt='bicycles img' />
      <div>
        <p>Прокат велосипедов</p>
        <p>
          У нас вы можете взять на прокат хорошо обслуженные и настроенные
          велосипеды. Как раз мы находимся в прекрасном парке!
        </p>
      </div>
    </div>
  );
}

export default Rental;
