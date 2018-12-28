import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
     <NavigationItem link= "/" exact>Car Breakdown</NavigationItem>
     <NavigationItem link="/repairs">Car Repairs</NavigationItem>
     <NavigationItem link="/spares">Car Spare Parts</NavigationItem>
     <NavigationItem link="/rentals">Car Rent</NavigationItem>

    <div className={classes.Auth}>
      <NavigationItem link="/signup" exact>Signup</NavigationItem>
      <NavigationItem link="/signin">signin</NavigationItem>
    </div> 
    

    </ul>
);

export default navigationItems;