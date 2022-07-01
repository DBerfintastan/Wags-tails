import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from './pages/Game';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Partner from './pages/Partner';
import Room from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Intro></Intro>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/game" element={<Game></Game>} />
          <Route path="/room" element={<Room></Room>} />
          <Route path="/partner" element={<Partner></Partner>} />
          <Route path="/connect" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
