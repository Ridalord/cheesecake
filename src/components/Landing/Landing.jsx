import TransparentButton from "../Buttons/TransparentButton"
import classes from "./landing.module.css"
import Watch from "./watch.svg"
import LandingImage from "./mainImage.png"



export default function Landing() {
  return (
    <>
      <div className={`${classes.landingSection} d-flex`}>
        <div className="col-8 d-flex">
          <div className={classes.content}>
            <h1>Bite The World of Cheesecake Wonders</h1>
            <p>We always make our customer happy by providing
              as many choices as possible </p>
            <div className="d-flex justify-content-between">
              <TransparentButton name={`Get Started`} darkButton={true} />
              <TransparentButton name={`Watch Demo`} icon={Watch} />
            </div>
          </div>
        </div>
        <div>
          <img src={LandingImage} alt="Landing Image" />
        </div>
      </div>
    </>
  )
}