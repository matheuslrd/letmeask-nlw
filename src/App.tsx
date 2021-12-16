import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './context/AuthContextProvider';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/rooms/new" element={ <NewRoom /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
