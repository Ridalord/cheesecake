import TransparentButton from "../Buttons/TransparentButton"
import classes from "./about.module.css"
import AboutImage from "./aboutImage.png"



export default function About() {
  return (
    <section className={`${classes.aboutWrap} d-flex justify-content-between`}>
      <div>
        <img src={AboutImage} alt="About Image" />
      </div>
      <div>
        <div>
          <h3>We Love Cheesecake</h3>
          <p>Discover Our Cheesecake Story</p>
        </div>
        <p>At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity.</p>
        <p>We believe in delivering not just desserts but moments of sheer indulgence.</p>
        <TransparentButton name="Read More" darkButton={true} />
      </div>
    </section>
  )
}