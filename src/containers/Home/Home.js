import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
//import classes from './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import  SpareTypes from '../../components/SpareTypes/SpareTypes';
import FeaturedSpares  from '../../components/Featured/Featured';
import Services from '../../components/Services/Services';
import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {
    render(){
      return(
        <Aux>
            <Toolbar/>
            <FeaturedSpares/>
            <SpareTypes/>
            <Services/>
            <Footer/>
           
        </Aux>
      )
    };
};
export default Layout;