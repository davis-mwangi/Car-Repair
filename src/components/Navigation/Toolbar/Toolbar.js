import React from 'react';

import styles from './Toolbar.scss';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../assets/images/logo-placeholder.png';
import Button from '../../UI/Button/Button';

const toolbar = (props)=>(
    <header className={styles.Toolbar}>
       <div className={styles.LogoBox}>
         <img src={Logo} alt="Logo" className={styles.HeaderLogo}/>
       </div>
       <nav className={styles.DesktopOnly}>
          <NavigationItems/>
       </nav>
       <div className={styles.HeaderBox}>
          <h1 className={styles.HeadingPrimary}>
              <span className={styles.Main}>SPARTEC</span>
              <span className={styles.Sub}>Get all in One Place</span>
          </h1>
          <Button btnType="Orange"
                  link="www.spartec.com"
                  clicked="True">Get Spare Now</Button>
       </div>
    </header>
);
export default toolbar;