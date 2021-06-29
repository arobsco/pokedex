import React from 'react';
import Header from './Header';
import PokemonCardCollection from './PokemonCard';

const App = () => {
    return(
        <div className='container'>
            <Header/>
            <PokemonCardCollection/>
        </div>
    );
};

export default App;