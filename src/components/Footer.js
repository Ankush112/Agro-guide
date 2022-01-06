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
        h2 > Developed By < /h2> <
        Link to = '/sign-up' > < /Link> <
        Link to = '/' > Mast.Ankush Bhalerao < /Link> <
        Link to = '/' > Miss.Manaswi Asalkar < /Link> <
        Link to = '/' > Miss.Priyanka Bagave < /Link> <
        Link to = '/' > Miss.Shalaka Alkute < /Link> < /
        div > <
        div class = 'footer-link-items' >
        <
        h2 > Contact Us < /h2>  <
        Link to = '/' > ankush.bhaleraog @gmail.com < /Link><p>(This works pal!! Send your feedback :))</p > < /
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