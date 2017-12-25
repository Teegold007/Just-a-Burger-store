import React from 'react';
import classes from './BuildControl.css';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      disabled={props.disabled}
      onClick={props.removeIngredient}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.addIngredient}>
      More
    </button>
  </div>
);

export default BuildControl;
