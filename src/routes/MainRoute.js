import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/pages/Dashboard';
import Login from '../components/pages/Login';
class MainRoute extends Component {

    render() {
        return (
            <BrowserRouter
                // basename={'/admin'}
            >
                <div>
                    <Switch>
                        <Route path="/" component={Login} exact />
                        <Route path="/dashboard" component={Dashboard} exact />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainRoute;