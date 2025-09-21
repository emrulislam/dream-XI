
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/Available Players/AvailablePlayers'

function App() {

  const playersPromise=fetch("/public/players.json").then(res=>res.json())

  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
    </Suspense>
    </>
  )
}

export default App
