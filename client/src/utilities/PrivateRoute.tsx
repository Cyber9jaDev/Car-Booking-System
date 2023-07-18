import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { ReactElement, useContext } from "react";

type ChildrenType = {  children: ReactElement | ReactElement[] }

const PrivateRoute = ({children}: ChildrenType) => {
  const { currentUser } = useContext(UserContext);
  
  return (
    <>
      { currentUser ? children : <Navigate to='/login' />}
    </>
  )
}

export default PrivateRoute;