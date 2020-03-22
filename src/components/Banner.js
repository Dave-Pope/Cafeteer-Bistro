import React from 'react';
import Section from './Section';

import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div className='Banner'>
            <Carousel>
                <Carousel.Item>
                    <img src={require('../assets/foodImg.jpg')} />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={require('../assets/drinkImg.jpg')} />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={require('../assets/sweetImg.jpg')} />
                </Carousel.Item>
            </Carousel>

            <Section />
        </div>
    );
};

export default Banner;
