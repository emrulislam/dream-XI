import React from 'react';
import {use} from "react"
import Player from '../Player/Player';

const AvailablePlayers = ({playersPromise,availableBalance,setAvailableBalance,addedPlayers,setAddedPlayers}) => {
    const playersData=use(playersPromise)
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {
                playersData.map(player=><Player key={player.id} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}  player={player} addedPlayers={addedPlayers} setAddedPlayers={setAddedPlayers}></Player>)
            }
            </div>
        </div>
    );
};

export default AvailablePlayers;