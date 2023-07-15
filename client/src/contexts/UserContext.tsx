import { createContext, useState, ReactElement, SetStateAction, Dispatch, ReactNode } from 'react';

type ChildrenType = { children? : ReactNode }

export interface AuthUserDataType {
  fullName: string,
  email: string,
  phone: string,
}

// type NextOfKinType = Pick<AuthUserDataType, 'fullName' | 'phone'>

export type AuthUserContextType = {
  currentUser : AuthUserDataType | null,
  setCurrentUser: Dispatch<SetStateAction<AuthUserDataType | null>>
  nextOfKin: Pick<AuthUserDataType, 'fullName' | 'phone'>,
  setNextOfKin:  Dispatch<SetStateAction<Pick<AuthUserDataType, "fullName" | "phone">>>
}

const user: string | null = localStorage.getItem('currentUser');
const parsedCurrentUser : AuthUserDataType | null = user ? JSON.parse(user) : null;

export const UserContext = createContext<AuthUserContextType>({} as AuthUserContextType);

export const UserContextProvider = ({ children } : ChildrenType) : ReactElement => {
  const [ currentUser, setCurrentUser ] = useState<AuthUserDataType | null>(parsedCurrentUser);
  const [ nextOfKin, setNextOfKin ] = useState<Pick<AuthUserDataType, 'fullName' | 'phone'>>({} as Pick<AuthUserDataType, 'fullName' | 'phone'>) ;
  

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, nextOfKin, setNextOfKin }}>
      { children }
    </UserContext.Provider>
  );
}

