import { createContext, useState, ReactElement, SetStateAction, Dispatch, ReactNode } from 'react';

type ChildrenType = {
    children? : ReactNode
}

export interface AuthUser {
  username: string,
  email: string,
}

export type AuthUserContextType = {
  currentUser : AuthUser | null,
  setCurrentUser: Dispatch<SetStateAction<AuthUser | null>>
}

// export const UserContext = createContext({} as AuthUserContextType);
export const UserContext = createContext<AuthUserContextType>({} as AuthUserContextType);

export const UserContextProvider = ({ children } : ChildrenType) : ReactElement => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      { children }
    </UserContext.Provider>
  );
}

