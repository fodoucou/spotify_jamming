import React,{useState} from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import Track,{Song_list} from './Track.js';
import Playlist from './Playlist.js';


function App() {
  //name of the song to be displayed
  const [artist,setArtist] = useState("unknow");
  const [song,setSong] = useState("unknow");

  return (

    <div className="App">  
      <SearchBar artist={artist} setArtist={setArtist}/> 
      <Track /> 
      <SearchResults artist={artist} song={song} /> 
      

    </div>
  );
}

export default App;
