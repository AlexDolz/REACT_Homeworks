import styles from './Header.module.css';
import header_logo from './media/header_img.png';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Веломастерская “Велозар”</h1>
        <p>
          Мы, мастера веломастерской «Велозар», как раз те самые счастливые
          люди, которые смогли превратить свое увлечение и хобби в профессию. Мы
          сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам
          только радость и удовольствие от езды.
        </p>
      </div>
      <div>
        <img src={header_logo} alt='dino img' />
      </div>
    </header>
  );
}

export default Header;
