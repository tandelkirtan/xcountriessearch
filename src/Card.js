import "./Card.css";

export const Card = ({common, png}) => {
  return (
    <div className="countryCard">
      <img src={png} alt="country-flag" width="150px" height="110px"/>
      <h2>{common}</h2>
    </div>  
  )
}
