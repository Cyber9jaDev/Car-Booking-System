import { createContext, useState, ReactElement, SetStateAction, Dispatch, ReactNode } from 'react';

type ChildrenType = {
  children? : ReactNode
}

export interface AuthUserDataType {
  username: string,
  email: string,
}
export type AuthUserContextType = {
  currentUser : AuthUserDataType | null,
  setCurrentUser: Dispatch<SetStateAction<AuthUserDataType | null>>
}

const user: string | null = localStorage.getItem('currentUser');
const parsedCurrentUser : AuthUserDataType | null = user? JSON.parse(user) : null;
export const UserContext = createContext<AuthUserContextType>({} as AuthUserContextType);

export const UserContextProvider = ({ children } : ChildrenType) : ReactElement => {
  const [currentUser, setCurrentUser] = useState<AuthUserDataType | null>(parsedCurrentUser);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      { children }
    </UserContext.Provider>
  );
}

