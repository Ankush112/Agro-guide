import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return ( <
        div className = 'footer-container' >
        <
        section className = 'footer-subscription' >
        <
        p className = 'footer-subscription-heading' >
        Join us
        for recieving updates <
        /p> <
        p className = 'footer-subscription-text' > <
        /p> <
        div className = 'input-areas' >
        <
        form >
        <
        input className = 'footer-input'
        name = 'phone-number'
        type = 'phone-number'
        placeholder = 'Your Contact number' /
        >
        <
        Button buttonStyle = 'btn--outline' > Subscribe < /Button> < /
        form > <
        /div> < /
        section > <
        div class = 'footer-links' >
        <
        div className = 'footer-link-wrapper' >
        <
        div class = 'footer-link-items' >
        <
        h2 > About Us < /h2> <
        Link to = '/sign-up' > < /Link> <
        Link to = '/' > Ankush Bhalerao < /Link> <
        Link to = '/' > Shalaka Alkute < /Link> <
        Link to = '/' > Priyanka Bagave < /Link> <
        Link to = '/' > Manaswi Asalkar < /Link> < /
        div > <
        div class = 'footer-link-items' >
        <
        h2 > Contact Us < /h2>  <
        Link to = '/' > agroguide166 @gmail.com < /Link><p>(This works pal!! Send us your feedback :))</p > < /
        div > <
        /div> <
        div className = 'footer-link-wrapper' >
        <
        div class = 'footer-link-items' >
        <
        h2 > Follow the creators on: < /h2> <
        Link to = '/' > Instagram < /Link>  <
        Link to = '/' > Youtube < /Link>  < /
        div >
        <
        /
        div >
        <
        /
        div >
        <
        /
        div >
    );
}

export default Footer;