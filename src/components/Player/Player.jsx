import React from "react";

const Player = ({ player }) => {
  const {
    id,
    image,
    name,
    nationality,
    price,
    rating,
    role,
    battingStyle,
    bowlingStyle,
  } = player;
  return (
    <div
      key={id}
      className="text-black p-6 rounded-2xl border border-[#1313131a] space-y-4 shadow-xl"
    >
      <div className="flex justify-center">
        <img src={image} alt={name} className="rounded-2xl"/>
      </div>

      <div className="flex justify-between items-center gap-5">
        <span>
          <i class="fa-solid fa-user text-2xl"></i>
        </span>
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <div className="flex justify-between items-center">
        <p>
          {" "}
          <span className="mr-2">
            <i class="fa-solid fa-flag"></i>
          </span>
          {nationality}
        </p>
        <p className="bg-[#1313130d] p-2 rounded-xl">{role}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold">Rating</span>
        <p className="bg-[#1313130d] p-2 rounded-xl">{rating}</p>
      </div>
     <hr class="border-gray-300 my-4"></hr>
      <div className="flex justify-between items-center">
        <span className="font-bold">Batting Style</span>
        <p className="bg-[#1313130d] p-2 rounded-xl">{battingStyle}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold">Bowling Style</span>
        <p className="bg-[#1313130d] p-2 rounded-xl ">{bowlingStyle}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Price:{price}</p>
        <button className="btn btn-neutral btn-outline">Choose Player</button>
      </div>
    </div>
  );
};

export default Player;
