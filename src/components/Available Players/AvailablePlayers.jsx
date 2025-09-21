import React from 'react';
import {use} from "react"
import Player from '../Player/Player';

const AvailablePlayers = ({playersPromise}) => {
    const playersData=use(playersPromise)
    console.log(playersData)
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {
                playersData.map(player=><Player key={playersData.id} player={player}></Player>)
            }
            </div>
        </div>
    );
};

export default AvailablePlayers;