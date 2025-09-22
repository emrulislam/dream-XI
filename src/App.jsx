import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import SelectedPlayers from "./components/Selected Players/SelectedPlayers";

function App() {
  const playersPromise = fetch("/public/players.json").then((res) =>
    res.json()
  );
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Available Players</h1>
        <div>
          <button onClick={()=>setToggle(true)} className={`p-3    rounded-l-2xl ${toggle===true?"bg-[#e7fe29]":""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`p-3    rounded-r-2xl ${toggle===false?"bg-[#e7fe29]":""}`}>
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
