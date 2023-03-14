import ServicesItem from '../ServicesItem/ServicesItem';
import styles from './ServicesList.module.css';

function ServicesList() {
  return (
    <div className={styles.services__list}>
      <ServicesItem title={'Годовое ТО'} backgroundColor={'#22356F'} />
      <ServicesItem title={'Выравнивание колес'} backgroundColor={'#0052C1'} />
      <ServicesItem
        title={'Настройка переключателей'}
        backgroundColor={'#76B58B'}
      />
    </div>
  );
}

export default ServicesList;
