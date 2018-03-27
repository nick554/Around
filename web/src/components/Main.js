import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import {Home} from "./Home"
import {Login} from './Login'
import {Register} from './Register'


export class Main extends React.Component {
    getRedirect = () => {
        return this.isLoggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/>;
    };
    getHome = () => {
        return this.isLoggedIn ? <Home /> : <Redirect to="/login"/>;
    };
    getLogin = () => {
        return this.isLoggedIn ? <Redirect to="/home"/> : <Login />;
    };
    getRegister = () => {
        return this.isLoggedIn ? <Redirect to="/home"/> : <Register />;
    };
    render() {
        return (
            <div className = "main">
                <Switch>
                    <Route exact path="/" render = {this.getRedirect} />
                    <Route path="/home" render = {this.getHome} />
                    <Route path="/login" render = {this.getLogin} />
                    <Route path="/register" render = {this.getRegister} />
                    <Route render = {this.getRedirect} />
                </Switch>
            </div>
        );
    }
}