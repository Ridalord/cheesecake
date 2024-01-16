import classes from "./blogCard.module.css"
import PropTypes from 'prop-types';





export default function BlogCard({image, date, title, detail}){
  return(
    <div className={classes.cardWrap}>
      <div className={classes.blogImage} style={{backgroundImage: `url(${image})`}}></div>
      <h5>{date} / Cheesecake</h5>
      <h3>{title}</h3>
      <p>{detail}</p>
      <span><a href="#readmore">Read More</a></span>
    </div>
  )
}

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
}