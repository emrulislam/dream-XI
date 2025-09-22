import { Suspense, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer,toast } from "react-toastify";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

const playersPromise = fetch("/public/players.json").then((res) => res.json());
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000);
  const [addedPlayers,setAddedPlayers] =useState([])
  const removePlayer = (player) => {
    setAddedPlayers(prev => prev.filter(p => p.id !== player.id));
    setAvailableBalance(prev => prev + player.price);
    toast(
            <div className="flex items-center gap-2">
              <img src={player.image} alt={player.name} className="w-8 h-8 rounded-full" />
              <span>{player.name} removed from your team</span>
            </div>
    )
  }
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Hero></Hero>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">{toggle?"Available Players":`Selected Players ${addedPlayers.length}/15`}</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`p-3 font-bold rounded-l-2xl ${
              toggle === true ? "bg-[#e7fe29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`p-3  font-bold  rounded-r-2xl ${
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
        } setToggle={setToggle}></SelectedPlayers>
      )}
      <NewsLetter></NewsLetter>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
