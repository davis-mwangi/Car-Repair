import React from 'react';

import classes from './Footer.scss';
import FooterLink from './FooterLink/FooterLink';

import LogoSmall from '../../../assets/images/logo-green-1x.png';
import LogoBig from '../../../assets/images/logo-green-2x.png';

const footer = (props) => (
  <footer className={classes.Footer}>

   <div className={classes.NewsLetter}>
      <p>NewsLetter Form</p>
   </div>

   <div className={classes.FooterText}>
            <div class={classes.LogoBox}>
               <img src={LogoSmall} alt="Full Logo" class={classes.FooterLogo}/>   
               <div className={classes.CopyRight}>
                 &copy; 2018 Spartec Inc. All rights reserved.
                 </div>
            </div>
            <ul className={classes.QuickLinks}> 
              <FooterLink link="/contact">Contact Us</FooterLink>
              <FooterLink link="/careers">Career</FooterLink>
              <FooterLink link="/privacy">Privacy Policy</FooterLink>
              <FooterLink link="/terms">Terms &amp; Condition</FooterLink>
            </ul>

              <ul className={classes.ConnectUS}> 
              <FooterLink link="/facebook">Facebook</FooterLink>
              <FooterLink link="/twitter">Twitter</FooterLink>
              <FooterLink link="/instagram">Instagram</FooterLink>
              <FooterLink link="/linkedin">Linked In</FooterLink>
            </ul>

              

   </div>
 
    
  </footer>
);
export default footer;