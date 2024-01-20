import classes from "./footer.module.css"
import FooterImage from "./footerImage.png"



export default function Footer() {
  return (
    <footer className={`${classes.footerWrap} d-flex justify-content-between`}>
      <div className={`${classes.contactSection} col-5`}>
        <h4>Contact Us</h4>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department!</p>
        <div className={classes.footerImage}>
          <img src={FooterImage} alt="Footer Image" />
        </div>
        <div>
          <ul className={`${classes.socialLinks} d-flex justify-content-between`}>
            <li>
              <a href="#facebook" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 46 43" fill="none">
                  <ellipse cx="23" cy="21.5" rx="23" ry="21.5" fill="#FF9900" />
                  <path d="M29 12H25.7273C24.2806 12 22.8932 12.5004 21.8704 13.3912C20.8474 14.282 20.2727 15.4902 20.2727 16.75V19.6H17V23.4H20.2727V31H24.6364V23.4H27.9091L29 19.6H24.6364V16.75C24.6364 16.498 24.7513 16.2564 24.9559 16.0782C25.1604 15.9001 25.438 15.8 25.7273 15.8H29V12Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
            <li className='d-flex justify-content-center'>
              <a href="#instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 19" fill="none">
                  <path d="M10.4366 13.2731C12.5072 13.2731 14.1858 11.7201 14.1858 9.80452C14.1858 7.88888 12.5072 6.33594 10.4366 6.33594C8.36604 6.33594 6.6875 7.88888 6.6875 9.80452C6.6875 11.7201 8.36604 13.2731 10.4366 13.2731Z" stroke="#484848" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 13.2729V6.33573C2 3.94118 4.09818 2 6.68641 2H14.1847C16.7729 2 18.8711 3.94118 18.8711 6.33573V13.2729C18.8711 15.6674 16.7729 17.6086 14.1847 17.6086H6.68641C4.09818 17.6086 2 15.6674 2 13.2729Z" stroke="#484848" strokeWidth="2.5" />
                  <path d="M15.5918 5.04521L15.6024 5.03418" stroke="#484848" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
            <li className='d-flex justify-content-center'>
              <a href="#twitter" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 23 18" fill="none">
                  <path d="M20.9512 2.00819C20.9512 2.00819 19.2129 2.97873 18.2463 3.25382C17.7275 2.69004 17.038 2.29044 16.2711 2.10908C15.5042 1.92772 14.6969 1.97334 13.9583 2.23977C13.2197 2.5062 12.5854 2.98059 12.1415 3.59878C11.6974 4.21697 11.465 4.94912 11.4756 5.69623V6.51037C9.96173 6.54746 8.46172 6.23015 7.10907 5.58668C5.75641 4.94321 4.59314 3.99357 3.72283 2.82233C3.72283 2.82233 0.277166 10.1496 8.02992 13.4061C6.25586 14.5442 4.14248 15.1149 2 15.0344C9.75275 19.1051 19.2283 15.0344 19.2283 5.6718C19.2276 5.44503 19.2045 5.21881 19.1594 4.99607C20.0386 4.17663 20.9512 2.00819 20.9512 2.00819Z" stroke="#484848" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
            <li className='d-flex justify-content-center'>
              <a href="#tube" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 18" fill="none">
                  <path d="M14.8583 9.37728L11.1074 11.4552V7.29932L14.8583 9.37728Z" fill="#484848" stroke="#484848" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 10.112V8.6417C2 5.63348 2 4.12939 2.9704 3.1616C3.9408 2.19382 5.46856 2.15193 8.52405 2.06815C9.97194 2.02845 11.4509 2 12.7168 2C13.9827 2 15.4617 2.02845 16.9095 2.06815C19.965 2.15193 21.4928 2.19382 22.4632 3.1616C23.4336 4.12939 23.4336 5.63348 23.4336 8.6417V10.112C23.4336 13.1201 23.4336 14.6243 22.4632 15.592C21.4928 16.5598 19.9651 16.6017 16.9096 16.6855C15.4617 16.7252 13.9827 16.7537 12.7168 16.7537C11.4509 16.7537 9.97187 16.7252 8.52396 16.6855C5.4685 16.6017 3.94078 16.5598 2.97038 15.592C2 14.6243 2 13.1201 2 10.112Z" stroke="#484848" strokeWidth="2.5" />
                </svg>
              </a>
            </li>
          </ul>
          <div className={classes.copyright}>
            <p>Copyright &copy; 2024 Dscode | All rights reserved</p>
          </div>
        </div>
      </div>
      <div className={`${classes.footerForm} col-4`}>
        <form action="#" className="d-flex">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea name="message" id="message" placeholder="Your Message..."></textarea>
          <button type="submit">Contact us now</button>
        </form>
      </div>
    </footer>
  )
}