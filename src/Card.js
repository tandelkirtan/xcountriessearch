import styles from "./Card.css";

export const Card = ({common, png}) => {
  return (
    <div className="countryCard">
      <img src={png} alt="country-flag" width="150px" height="110px"/>
      <h4>{common}</h4>
    </div>
  )
}
