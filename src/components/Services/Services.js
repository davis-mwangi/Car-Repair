import React from 'react';

import classes from './Services.scss';
import ServiceImgLeft from './ServiceImgLeft/ServiceImgLeft';
import ServiceImgRight from './ServiceImgRight/ServiceImgRight';

import SpareParts from '../../assets/images/spare_parts.jpg';
import CarBreakdown from '../../assets/images/car_breakdown.jpg';
import CarHire from '../../assets/images/car_hire.jpg';

const services = (props) => (
    <div className={classes.Services}>
        <ServiceImgLeft 
            serviceImg = {CarBreakdown}
            serviceTitle= "Car Breakdown" 
            serviceDescription="When  driving home and your car got a puncture or develop a mechanical problem, just contact one of the nearest Automobile mechanic to fix your problem or breakdown to pull your car to service bay."/>

        <hr className={classes.Line}/>
        <ServiceImgRight
            serviceImg = {SpareParts}
            serviceTitle= "All Motor Vehicle Spare Parts" 
            serviceDescription= "Avoid hustles and buzzles of suching genuine spare parts of  car, motor cycle, tructor, buses, bicycles etc. Just Connect with one of our dealers and get it asap."
        />

        <hr className={classes.Line}/>

        <ServiceImgLeft 
            serviceImg = {CarHire}
            serviceTitle= "Hire Car Now" 
            serviceDescription="Need of a car, contact one of car hire dealers and get a car of your choice. Connect with all Car dealers across the country."/>
        <hr className={classes.Line}/>
    </div>
);
export default services;