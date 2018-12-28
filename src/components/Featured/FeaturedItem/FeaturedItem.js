import React, { Component} from 'react';

import classes from './FeaturedItem.scss';

class FeaturedItem extends Component {
  render(){
      return (
       <div className={classes.FeaturedItem}>
           <img src={this.props.spareImage} alt="Featured Spare 1" className={classes.Img} />
           <div className={classes.DetailsBox}>
             <h5 className={classes.Name}>{this.props.name}</h5>
              <div className={classes.Price}>
                Ksh. 2000
              </div>
           </div>
           
       </div>
      );
  }
}
export default FeaturedItem;