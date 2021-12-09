import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NewRoom from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rooms/new" element={ <NewRoom /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
