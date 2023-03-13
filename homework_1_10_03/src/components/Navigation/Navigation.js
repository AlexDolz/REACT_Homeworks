import styles from './Navigation.module.css';
import logo from '../Navigation/media/logo.png';
import Button from '../Button/Button';

function Navigation() {
  return (
    <div className={styles.nav}>
      <img src={logo} alt='logo' />

      <ul>
        <li>О нас</li>
        <li>Услуги</li>
        <li>Аренда</li>
      </ul>

      <Button />
    </div>
  );
}

export default Navigation;
