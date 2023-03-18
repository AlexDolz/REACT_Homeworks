import styles from './ServicesItem.module.css';

function ServicesItem(props) {
  const { backgroundColor, title } = props;
  return (
    <div
      className={styles.services__item}
      style={{ background: backgroundColor }}
    >
      <div className={styles.services__item__line}></div>
      <p>{title}</p>
    </div>
  );
}

export default ServicesItem;
