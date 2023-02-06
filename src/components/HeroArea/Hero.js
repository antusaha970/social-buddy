import { Container } from '@mui/system';
import React from 'react';
import './Hero.css';
import art from '../../images/art.jpg';


const Hero = () => {
    return (
        <Container fixed>
            <div className='hero'>
                <h1 className='text-center header-text'>THE ART MEDIA</h1>
                <p className='text-center normal-text'>international art news & exhibitions journal - since 2021</p>
                <img src={art} alt="" />
               <p className='text-center'> <q>
                    Knowledge is the most precious thing that a human can share
                </q></p>
            </div>
        </Container>
    );
};

export default Hero;