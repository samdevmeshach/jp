import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Home'
import HotelPage from './Hotel'
import ContactUs from './ContactUs'
import Teams from './Teams'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hotel" exact component={HotelPage} />
                <Route path="/contactus" exact component={ContactUs} />
                <Route path="/teams" exact component={Teams} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
