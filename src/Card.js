import styles from "./Card.module.css";

export const Card = ({common, png}) => {
  return (
    <div className={styles.countryCard}>
      <img src={png} alt="country-flag" width="150px" height="110px"/>
      <h4>{common}</h4>
    </div>
  )
}
