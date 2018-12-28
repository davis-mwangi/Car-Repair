import React from 'react';
import classes from './Button.scss';

const button = (props) => (
    <a
        href={props.link}
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </a>
);
export default button;