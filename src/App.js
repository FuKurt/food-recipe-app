import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');

    const APP_ID = '749c2515';
    const APP_KEY = 'cd3e06f1a41bdaf7f582b2a26b16f91b';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async() => {
        let result = await fetch(url);
        let data = await result.json();
        console.log(data);
        setQuery('');
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    return (
        <div className='App'>
            <h1 onClick={getData}>Food Searching App</h1>
            <form className='search-form' onSubmit={onSubmit}>
                <input 
                type='text' 
                placeholder='Search Food' 
                autoComplete='off' 
                onChange={onChange} 
                value={query} />
                <input type='submit' value='search' />
            </form>
        </div>
    )
}

export default App
