import React from 'react';

import './hero.scss';

import bg from '../../assets/hero.png';

const Hero = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">Watch Something Interesting</h2>
                   
                </div>
               
            </div>
        </div>
    );
}


export default Hero;
