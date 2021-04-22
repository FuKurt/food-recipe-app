import React from 'react';
import './App.css';

const App = () => {
    const APP_ID = '749c2515';
    const APP_KEY = 'cd3e06f1a41bdaf7f582b2a26b16f91b';
    const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async() => {
        let result = await fetch(url);
        let data = await result.json();

        console.log(data);
    }

    return (
        <div className='App'>
            <h1 onClick={getData}>Food Searching App</h1>
        </div>
    )
}

export default App
