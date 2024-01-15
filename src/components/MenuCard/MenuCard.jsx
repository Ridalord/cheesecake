import classes from "./menucard.module.css"
import PropTypes from 'prop-types';
import Stars from "./stars.png"




export default function MenuCard({name, headline, price, image}) {
  return (
    <div className={`${classes.cardWrap}`}>
      <div className={classes.imageWrap}>
        <img src={image} alt="Menu Image" />
      </div>
      <div className={classes.itemDetails}>
        <h5>{name}</h5>
        <p>{headline}</p>
      </div>
      <div className={`${classes.priceRating} d-flex justify-content-between`}>
        <div className={classes.price}><span>$</span><span>{price.toFixed(2)}</span></div>
        <div>
          <img src={Stars} alt="Star ratings" />
        </div>
      </div>
    </div>
  )
}

MenuCard.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}