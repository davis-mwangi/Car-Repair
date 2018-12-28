import React, {Component} from 'react';

import classes from './SpareType.scss';
import { IconContext } from 'react-icons';

class SpareType extends Component {
   render(){
    return(
        <div className={classes.FeatureBox}>
           <IconContext.Provider
              value={{ color: "#1976d2",
                       className: "FeatureBoxIcon",
                       size: "8rem"}}
               >
             <div>
                 {this.props.iconImage}
             </div>

           </IconContext.Provider>
            <h3 className={classes.HeadingTertiary}>{this.props.title}</h3>
        </div>
       );
   }
};


export default SpareType;
