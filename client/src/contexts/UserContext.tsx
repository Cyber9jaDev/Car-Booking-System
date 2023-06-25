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

const user: string | null = localStorage.getItem('currentUser');
const parsedCurrentUser : AuthUser | null = user? JSON.parse(user) : null;
export const UserContext = createContext<AuthUserContextType>({} as AuthUserContextType);

export const UserContextProvider = ({ children } : ChildrenType) : ReactElement => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(parsedCurrentUser);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      { children }
    </UserContext.Provider>
  );
}

