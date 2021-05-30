import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import calendar from './components/pages/calendar';
import crops from './components/pages/crops';
import faqs from './components/pages/faqs';
import qna from './components/pages/qna';
import SignUp from './components/pages/SignUp';
import treatment from './components/pages/treatment';
import weekly from './components/pages/weekly';
import weather from './components/pages/weather';
import Footer from './components/Footer'


function App() {
    return ( < >
        <
        Router >
        <
        Navbar / >

        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        / > <
        Route path = '/calendar'
        component = { calendar }
        /> <
        Route path = '/crops'
        component = { crops }
        /> <
        Route path = '/faqs'
        component = { faqs }
        /> <
        Route path = '/qna'
        component = { qna }
        /> <
        Route path = '/SignUp'
        component = { SignUp }
        /> <
        Route path = '/treatment'
        component = { treatment }
        /> <
        Route path = '/weekly'
        component = { weekly }
        /> <
        Route path = '/weather'
        component = { weather }
        /> < /
        Switch >
        <
        Footer / >
        <
        /
        Router > <
        /> 
    );
}

export default App;