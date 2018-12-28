import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';

import HomePage from '../Home/Home';
class Layout extends Component {
    render(){
      return(
        <Aux>
           <HomePage/>
           
        </Aux>
      )
    };
};
export default Layout;