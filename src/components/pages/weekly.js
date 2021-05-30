import React from 'react';
import '../../App.css';
import './diseases.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function weekly() {
    return ( <
        Carousel >
        <
        Carousel.Item >
        <
        img src = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        class = "d-block w-100"
        alt = "..."
        alt = "First slide" /
        >
        <
        Carousel.Caption > < p > < h1 > Drone spraying takes off as regulations relax worldwide < /h1> < /p > <
        a href = "https://futurefarming.com/Machinery/Articles/2020/3/Drone-spraying-takes-off-as-regulations-relax-worldwide-550982E/" > Click Here to read full article < /a> < /
        Carousel.Caption > <
        /Carousel.Item> <
        Carousel.Item >
        <
        img src = "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        class = "d-block w-100"
        alt = "..." /
        >

        <
        Carousel.Caption >
        <
        p > < h1 > Vertical farming sector struggles with costs < /h1>< /p > <
        a href = "https://futurefarming.com/Smart-farmers/Articles/2020/4/Vertical-farming-sector-struggles-with-costs-569801E/" > Click Here to read full article < /a> < /
        Carousel.Caption > <
        /Carousel.Item> <
        Carousel.Item >
        <
        img src = "https://images.unsplash.com/photo-1533062618053-d51e617307ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        class = "d-block w-100"
        alt = "..." / >

        <
        Carousel.Caption > < a href = "https://futurefarming.com/Smart-farmers/Articles/2020/8/Farm-of-the-Future-alternative-to-monoculture-farming-627840E/" > Click Here to read full article < /a> <
        p > < h1 > Farm of the Future: Alternative to monoculture farming < /h1> < /p > < /
        Carousel.Caption > <
        /Carousel.Item> < /
        Carousel >
    );
};

export default weekly;