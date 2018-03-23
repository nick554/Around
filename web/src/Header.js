import React from 'react';
import logo from './logo.svg';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-title">
                    <p className = "project-name">Around</p>
                    <p className = "project-tool">Powered by React</p>
                </div>
            </header>
        );
    }
}