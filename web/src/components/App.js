import React from 'react';
import { Header } from './Header'
import { Main } from './Main'
import { Token_KEY } from '../constants'

import '../styles/App.css';


class App extends React.Component {
    state = {
        isLoggedIn : !! localStorage.getItem(Token_KEY),
    }
    handleSuccessLogin = (response) => {
        localStorage.setItem(Token_KEY, response);
        this.setState({ isLoggedIn:true })
    }
    handleLogout = () => {
        localStorage.removeItem(Token_KEY);
        this.setState({ isLoggedIn: false });
    }
q
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
        <Main isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
      </div>
    );
  }
}

export default App;
