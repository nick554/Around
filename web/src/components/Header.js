import React from 'react';
import logo from '../asserts/images/logo.svg';
import { Icon } from 'antd';


export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-title">
                    <p className = "project-name">Around</p>
                    <p className = "project-tool">Powered by React</p>
                    {
                        this.props.isLoggedIn ?
                            <a className="logout" onClick={this.props.handleLogout}>
                                <Icon type="logout"/>&nbsp&nbsp logout
                            </a> : null
                    }
                </div>
            </header>
        );
    }
}