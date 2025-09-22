import React from 'react';
import AddedPlayer from '../AddedPlayers/AddedPlayer';

const SelectedPlayers = ({addedPlayers,removePlayer}) => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <AddedPlayer addedPlayers={addedPlayers} removePlayer={removePlayer}></AddedPlayer>
        </div>
    );
};

export default SelectedPlayers;