import { createContext, FC, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { auth, firebase } from './services/firebase';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

type TAuthContext = {
  user: IUser | undefined;
  signInWithGoogle: () => void,
};

export const AuthContext = createContext({} as TAuthContext);

export const App: FC = () => {
  const [user, setUser] = useState<IUser>();

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      if(result.user) {
        const { displayName, photoURL, uid } = result.user;

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    });
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Routes>
          <Route path="/rooms/new" element={ <NewRoom /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
