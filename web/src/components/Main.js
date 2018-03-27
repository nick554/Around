import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import {Home} from "./Home"
import {Login} from './Login'
import {Register} from './Register'


export class Main extends React.Component {
    getRedirect = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/>;
    };
    getHome = () => {
        return this.props.isLoggedIn ? <Home /> : <Redirect to="/login"/>;
    };
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/>
            : <Login className = 'login-form' handleSuccessLogin={this.props.handleSuccessLogin}/>;
    };
    getRegister = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> : <Register className = 'register-form'/>;
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