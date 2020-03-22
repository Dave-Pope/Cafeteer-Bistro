import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Header from './components/Header';
import Banner from './components/Banner';

import './styles/App.css';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <div className='App'>
                    <Header />
                    <Switch>
                        <Route path='/Cafeteer-Bistro' component={Banner} />
                    </Switch>
                </div>
            </ScrollToTop>
        </Router>
    );
};

export default App;
