import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return ( <
        div className = 'cards' >
        <
        h1 > < /h1> <
        div className = 'cards__container' >
        <
        div className = 'cards__wrapper' >
        <
        ul className = 'cards__items' >
        <
        CardItem src = 'images/img-2.jpeg'
        text = 'Check out the weather today'
        label = 'Weather'
        path = '/weather' /
        >
        <
        CardItem src = 'images/img-7.jpeg'
        text = 'This week"s Featured Crop'
        label = 'Crop'
        path = '/crops' /
        >
        <
        /ul> <
        ul className = 'cards__items' >

        <
        CardItem src = 'images/img-1.jpeg'
        text = 'Do the right things at the right time! '
        label = 'Time'
        path = '/calendar' /
        >
        <
        CardItem src = 'images/img-5.jpeg'
        text = 'See what experts have to say!'
        label = 'Faqs'
        path = '/faqs' /
        >
        <
        /ul> < /
        div > <
        /div> < /
        div >
    );
}

export default Cards;