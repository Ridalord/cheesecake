import classes from './footer.module.css'
import FooterImage from "./contact.png"
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"


export default function Footer() {

  // Dynamic current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${classes.footer}`}>
      <div className={`${classes.grid}`}>
        <div className={`${classes.footerLeft}`}>
          <div className={`${classes.footerText}`}>
            <h1 className={`${classes.header}`}>contact us</h1>
            <p>
              Need to get in touch with us? Either fill out the form <br/> with your inquiry or find the department!
            </p>
          </div>
          <img src={FooterImage} alt="footer image" className={`${classes.img}`}/>
          <div className={`${classes.socialIcons}`}>
            <FaFacebook className={`${classes.icons}`} />
            <FaInstagram className={`${classes.icons}`}/>
            <FaTwitter className={`${classes.icons}`}/>
            <FaYoutube className={`${classes.icons}`}/>
          </div>
          <div className={`${classes.copyrightInfo}`}>
            Copyright &copy; {currentYear} Dscode | All rights reserved 
          </div>
        </div>
        <div className={ `${classes.footerRight}`}>
          <div className={`${classes.contactForm}`}>
            <form action="#">
              <div className={`${classes.formControl}`}>
                <input type='text' placeholder='Name' required/>
              </div>
              <div className={`${classes.formControl}`}>
                <input type='email' placeholder='Email' required/>
              </div>
              <div className={`${classes.formControl}`}>
                <textarea name="texy" id="" cols="40" rows="6" placeholder='Your Message...' />
              </div>
              <button type='submit' className={`${classes.btn}`}>contact us now</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
