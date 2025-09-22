import React from 'react';
import AddedPlayer from '../AddedPlayers/AddedPlayer';

const SelectedPlayers = ({addedPlayers,removePlayer,setToggle}) => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <AddedPlayer addedPlayers={addedPlayers} removePlayer={removePlayer} setToggle={setToggle}></AddedPlayer>
        </div>
    );
};

export default SelectedPlayers;