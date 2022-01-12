import './css/style.css';
import React, { Component } from 'react';
import NavBar from './components/navbar.js';
import Home from './components/home.js';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <NavBar title="Oscars 2022 new" name="oScAr" />
                <Home title="Oscar winners" />
            </div >
        );
    }
}

export default App;