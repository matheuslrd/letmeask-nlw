import { createContext, FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const TestContext = createContext('');

export const App: FC = () => {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'teste'}>
        <Routes>
          <Route path="/rooms/new" element={ <NewRoom /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
