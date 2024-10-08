import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Battle from './pages/Battle/Battle';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import Home from './pages/HomePage/HomePage';
import { SelectedPlayerContext } from './SelectedPlayerContext';
import { useState } from 'react';
import { CharacterSheetType } from './types';
import { characterPlaceholder } from './placeholders/characterPlaceholder';


function App() {
  const [player, setPlayer] = useState<CharacterSheetType>(characterPlaceholder);
  
  function playerHandler(selectedCharacter: CharacterSheetType) {
    setPlayer(selectedCharacter);
  }
  
  return (
    <SelectedPlayerContext.Provider value={player}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/battle' element={<Battle />} />
          <Route path='/character' element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </SelectedPlayerContext.Provider>
  );
}

export default App;
