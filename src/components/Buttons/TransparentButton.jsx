import classes from "./buttons.module.css"
import PropTypes from 'prop-types';


export default function TransparentButton({name}) {
  return (
    <button className={`${classes.buttons}`}>
      {name}
    </button>
  )
}

TransparentButton.propTypes = {
  name: PropTypes.string.isRequired,
};