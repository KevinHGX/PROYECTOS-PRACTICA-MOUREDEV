import "./styles/styles.scss";
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Ranking from './components/Ranking';
import Select from './components/Select';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
<<<<<<< HEAD
=======
import Data from './components/Data';
>>>>>>> develop

import { AnimatePresence } from 'framer-motion';
import { createContext, useState, useEffect} from "react";

function getRandomDifficulty() {
    const difficulties = ["easy", "medium", "hard"];
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    return difficulties[randomIndex];
}

export const UserContext = createContext();

// En tu archivo UserContext.js o donde definas newPlayer
export const createNewPlayer = () => ({
  name: '',
  score: 0,
  ranking: 0,
  id_category: 0,
  category: 'random',
  level: 'random',
  statusRandom: false,
  statusSelect: false,
  statusComplete: false
});


function App() {
  const [random, setRandom] = useState('');//easy, medium, 
<<<<<<< HEAD
  const [player,setPlayer] = useState({name:'',
                                      score:0,
                                      ranking:0,
                                      category:0,
                                      level:'', 
                                      statusRandom:false,
                                      statusSelect:false});
=======
  const [player,setPlayer] = useState(createNewPlayer());
>>>>>>> develop

  useEffect(()=>{
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      level: getRandomDifficulty(),
    }));
  },[player.statusRandom]);

  const location = useLocation();

  return (<>
        <UserContext.Provider value={player}>
<<<<<<< HEAD
          {(!player.statusSelect && !player.statusRandom) && <Navbar/>}
=======
          {(!player.statusSelect && !player.statusRandom) && <Navbar setPlayer={setPlayer}/>}
>>>>>>> develop
            <AnimatePresence mode="wait">
              <Routes location={location} key={ location.pathname }>              
                  <Route path='/Home' element={ <Home /> } />
                  <Route path='/Ranking' element={ <Ranking /> } />
                  <Route path='/Select' element={ <Select /> } />
                  <Route path='/Quiz'  element={ <Quiz /> } />
<<<<<<< HEAD
=======
                  <Route path='/Data' element={ <Data setPlayer={setPlayer} />} />
>>>>>>> develop
              </Routes>
            </AnimatePresence>
        </UserContext.Provider>
  </>);
}

export default App;
