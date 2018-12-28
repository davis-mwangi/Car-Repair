import React from 'react';

import classes from './Featured.scss';
import FeaturedItem from './FeaturedItem/FeaturedItem';

import Bearing from '../../assets/images/bearings.jpeg';
import Wheels from '../../assets/images/wheels.jpeg';
import BrakePads from '../../assets/images/brake_pads.jpeg';


const featuredSpares = (props) => (

  <section className={classes.Featured}>
   <h3 className={[classes.HeadingSecondary, classes.Orange, classes.MarginTopBig].join(' ')}>Featured Spare Parts</h3>
    <div className={classes.FeaturedItems}>
        <FeaturedItem spareImage={Bearing} name="Bearings"/>
        <FeaturedItem spareImage={Wheels} name="Car tyres Size 24- Mercedez Benz "/>
        <FeaturedItem  spareImage={BrakePads} name="Brake pads"/>
    </div>
    
  
  </section>

);

export default featuredSpares;