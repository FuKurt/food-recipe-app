import React, {useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';
//benzersiz id ekleyebilmek için bunu npm i uuid üzerinden indirip import ettik
import {v4 as uuidv4} from 'uuid';
import Alert from './components/Alert';

const App = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState('');

    const APP_ID = '749c2515';
    const APP_KEY = 'cd3e06f1a41bdaf7f582b2a26b16f91b';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async() => {
        if(query !== ''){            
            let result = await fetch(url);
            let data = await result.json();
            if(!data.more){
                return setAlert('No food such name');
            }
            setRecipes(data.hits);
            console.log(data);
            setAlert('');
            setQuery('');
        }else {
            setAlert('Please fill the form');
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }    

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
        setQuery('');
    }

    return (
        <div className='App'>
            <h1>Food Searching App</h1>
            <form className='search-form' onSubmit={onSubmit}>
                {alert !== '' && <Alert alert={alert} />}
                <input 
                type='text' 
                placeholder='Search Food' 
                autoComplete='off' 
                onChange={onChange} 
                value={query} />
                <input type='submit' value='search' />
            </form>
            <div className='recipes'>
                {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} /> )}
            </div> 
        </div>
    )
}

export default App
