import React, { useState } from 'react';
import Track, { Song_list } from './Track';
import Playlist from './Playlist';

function SearchResults(props){
    const [morceau,setMorceau]=useState([]);
    
    //to add a track to the personalised list
    function onAddHandler(morceau){
        setMorceau((item)=>[morceau.artist,...item]);
    }

    //to delete a track from the personalised list   morceau => morceau.filter((item,index)=>index!==targetIndex
    function onDeletePlaylist(targetIndex){
        setMorceau( morceau =>morceau.filter((item,index)=>index!==targetIndex));
    }

    return(
        <div>
            <div>
                <h2> Le Resultat de la tracklist </h2>
                    <ul>
                        {Song_list.map((item)=><li key={item.id}> {item.artist} -{item.song} <button onClick={()=>onAddHandler(item)}> + </button></li>)}
                    </ul>
                <h2> Les morceaux choisis </h2>
            </div>
            <div>
                <ul>
                        {console.log(morceau)}
                        {morceau.map((item,index)=><li key={index}> {item}- {index} <button onClick={()=>onDeletePlaylist(index)}> - </button> </li>)}
                    
                </ul>
            </div>
        </div>
    )



}



export default SearchResults;









/*Song_list.map((item,index)=>(<p key={index}>{item.artist} - {item.song}</p>))


 Song_list.filter((item,index)=>(<p key={index}>{item.artist} - {item.song}</p>))

    {//container of the new playlist }
    const [playlist,setPlaylist]=useState(["new list","gang"]);     


    function onAddHandler(song){
        setPlaylist((item)=>[song.artist, ...item]);
        console.log(song);
    }
    
    return(
        <div>
            <h2> Voici la tracklist </h2>
            <ul>
                {props.artist}
                {
                    Song_list.map((item,index)=>(<li key={index}> {item.artist} - {item.song} <button id={item.id} onClick={()=>onAddHandler(item)}> + </button> </li>))
                }           
            </ul>

            <h2> Voici la liste correspondante </h2>
            <ul>
             {playlist}

            </ul>
        </div>
    )





 
*/ 
















/*
        <div>
            <p> Here is the selected song </p>
            <ul> 
                <li> {props.artist} - {props.song} </li>
                {console.log(Song_list)}
                {
                 Song_list.map((item,index)=>(<li key={index}>{item.artist}</li>))
                 
                }

            </ul>
        </div> */