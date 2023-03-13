import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div>
        <p>
          Приехав к нам однажды, многие наши клиенты становятся постоянными, а
          часть из них даже друзьями.
        </p>
        <p>
          А также в нашей мастерской можно отремонтировать электросамокат и
          электровелосипед.
        </p>
      </div>
    </div>
  );
}

export default About;
