import React from 'react';

import classes from './ServiceImgLeft.scss';

const serviceImgLeft = (props) => (
  <div className={classes.Service}>
      <div className={classes.ImageBox}>
         <img src={props.serviceImg} alt="" className={classes.ServiceImg}/>
      </div>

      <div className={classes.ServiceTextBox}>
         <div className={classes.ServiceTitle}>{props.serviceTitle}</div>
         <p className={classes.ServiceDescription}>
          {props.serviceDescription}
         </p>
      </div>
      

  </div>
);
export default serviceImgLeft;