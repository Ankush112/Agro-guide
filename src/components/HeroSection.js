import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';

function HeroSection() {
    return ( <
        div className = 'hero-container' >
        <
        video src = '/videos/video-2.mp4'
        autoPlay loop muted / >
        <
        h1 > || ANNADATA SUKHI BHAVA || < /h1> <
        p > For helping the hands that feed the nation < /p> <
        div className = 'hero-btns' >
        <
        Button className = 'btns'
        buttonStyle = 'btn--outline'
        buttonSize = 'btn--large' >
        MAUSUM TODAY < /
        Button > <
        Button2 className = 'btns'
        buttonStyle = 'btn--primary'
        buttonSize = 'btn--large'
        onClick = { console.log('hey') } >
        CROP EXPERTISE < i className = 'far fa-play-circle' / >
        <
        /Button2> < /
        div > <
        /div>
    );
}

export default HeroSection;