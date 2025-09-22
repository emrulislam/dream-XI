import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";

const playersPromise = fetch("/public/players.json").then((res) => res.json());
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000);
  const [addedPlayers,setAddedPlayers] =useState([])
  const removePlayer = (player) => {
    setAddedPlayers(prev => prev.filter(p => p.id !== player.id));
    setAvailableBalance(prev => prev + player.price);
  }
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">{toggle?"Available Players":`Selected Players ${addedPlayers.length}/15`}</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`p-3    rounded-l-2xl ${
              toggle === true ? "bg-[#e7fe29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`p-3    rounded-r-2xl ${
              toggle === false ? "bg-[#e7fe29]" : ""
            }`}
          >
            Selected <span>({addedPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            addedPlayers={addedPlayers}
            setAddedPlayers={setAddedPlayers}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers addedPlayers={addedPlayers} removePlayer={
          removePlayer
        }></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
