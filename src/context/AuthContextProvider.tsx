import { createContext, FC, ReactNode, useEffect, useState } from "react";

import { auth, firebase } from '../services/firebase';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

type TAuthContext = {
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>,
};

type TAuthContextProvider = {
  children: ReactNode;
}

export const AuthContext = createContext({} as TAuthContext);

export const AuthContextProvider: FC<TAuthContextProvider> = (props: TAuthContextProvider) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        const { displayName, photoURL, uid } = user;
  
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

    return () => {
      unSubscribe();
    }
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

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
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      { props.children }
    </AuthContext.Provider>
  );
}