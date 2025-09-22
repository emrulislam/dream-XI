import React from "react";

const AddedPlayer = ({ addedPlayers,removePlayer}) => {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {addedPlayers.map((player) => (
        <div
          key={player.id}
          className="flex justify-between items-center border-2 border-gray-300 p-3 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <img
              src={player.image}
              alt={player.name}
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <h3 className="font-bold">{player.name}</h3>
              <p>{player.role}</p>
            </div>
          </div>
          <div>
            <i onClick={() => removePlayer(player)} className="fa fa-trash cursor-pointer" aria-hidden="true"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedPlayer;
