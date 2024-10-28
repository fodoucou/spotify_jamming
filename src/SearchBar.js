import React from 'react';
import Track,{Song_list} from './Track.js';


function SearchBar(props){

    const {artist,setArtist}= props;

    function onSubmitHandler(e){
        e.preventDefault();
        setArtist(document.getElementById('search').value);    
        
    }

    return(
        <div>
        <h1> This is the Spotify search bar </h1>
        
        {/* form containing the search bar */}
        <form onSubmit={onSubmitHandler}> 
            <input id="search" type="text" placeholder='song' /> 
            <button type="submit"> Go </button>
            <br/>
            <button > Save to Spotify </button>
            
        </form>
        
        </div>
    )
}


export default SearchBar;
