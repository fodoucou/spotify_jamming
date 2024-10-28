import React, {useState} from "react";
import Track, { Song_list } from './Track';

function Playlist(props){

    {/*container of the new playlist */}
    const [playlist,setPlaylist]=["new list","gang"]; 

    return(
        <div>
            <h2> Voici la liste correspondante </h2>

            <ul>
                {playlist}

            </ul>

        </div>
    )

}


export default Playlist;