import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Battle from './pages/Battle/Battle';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import Home from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/battle' element={<Battle />} />
        <Route path='/character' element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
