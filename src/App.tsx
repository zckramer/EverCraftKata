import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Battle from './pages/Battle/Battle';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import Home from './pages/HomePage/HomePage';
import SelectedPlayerContextProvider from './store/selected-character-context';
import { CharacterSheetType } from './types';

type Actions = {type: "select"; value: CharacterSheetType}

function App() {

  return (
    <SelectedPlayerContextProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/battle' element={<Battle />} />
          <Route path='/character' element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </SelectedPlayerContextProvider>
  );
}

function selectPlayerReducer(playerSelection: CharacterSheetType, action: Actions): CharacterSheetType {
  switch (action.type) {
    case 'select': {
      return playerSelection;
    }
    default: {
      return {};
    }
  }
}

export default App;
