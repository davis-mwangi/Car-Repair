import React,  { Component} from 'react';

import classes from './SpareTypes.scss';
import SpareType from './SpareType/SpareType';

import { FaCar, FaMotorcycle, FaBusAlt, FaTruckMonster } from 'react-icons/fa';

class SpareTypes extends Component {
  render(){
    return (
      <section className={classes.SpareSection}>
        <h3  className={[classes.HeadingSecondary, classes.Orange].join(' ')}>Spare Types</h3>
        <div className={classes.SpareTypes}>
      
        <SpareType 
            iconImage={<FaCar/>}
            title="Cars"/>
        <SpareType
            iconImage={<FaMotorcycle/>}
            title="Motor Cycles" />
          
            
        <SpareType
            iconImage={< FaBusAlt/>}
            title="Bus and Vans"/>
            
        <SpareType
            iconImage = {<FaTruckMonster/>}
            title= "Tructors and trailers"/>
        </div>
    
 </section>
    ); 
  };
};



export default SpareTypes;