import classes from "./buttons.module.css"
import PropTypes from 'prop-types';


export default function TransparentButton({name, icon, darkButton}) {
  return (
    <button className={`${classes.buttons} ${darkButton && classes.darkButton}`}>
      {icon && <img src={icon} alt="icon" className={classes.buttonIcon} />}
      {name}
    </button>
  )
}

TransparentButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  darkButton: PropTypes.bool
};