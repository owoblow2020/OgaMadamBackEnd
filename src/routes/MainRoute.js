import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/pages/Dashboard';
import Login from '../components/pages/Login';
class MainRoute extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                    <Route path="/dashboard" component={Dashboard} exact />  
                        <Route path="/" component={Login} exact/>
                                              
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainRoute;