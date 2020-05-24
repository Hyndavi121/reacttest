import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./Login/Login";
import Contact from "./Contact/Contact";
import Items from './Items/Items';
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Items" component={Items} />
                </Switch>
            </Router>
        )
    }
}
