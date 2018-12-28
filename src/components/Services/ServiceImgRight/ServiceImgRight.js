import React from 'react';

import classes from './ServiceImgRight.scss';




const serviceImgRight = (props) => (
  <div className={classes.Service}>
      

      <div className={classes.ServiceTextBox}>
         <div className={classes.ServiceTitle}>{props.serviceTitle}</div>
         <p className={classes.ServiceDescription}>
         {props.serviceDescription} 
         </p>
      </div>

      <div className={classes.ImageBox}>
         <img src={props.serviceImg} alt="" className={classes.ServiceImg}/>
      </div>
      

  </div>
);
export default serviceImgRight;