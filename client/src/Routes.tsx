import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/users/Homepage';
import SharedLayout from './pages/users/SharedLayout';
import Signup from "./pages/users/Signup";
import Login from "./pages/users/Login";
import About from "./pages/users/About";
import Services from "./pages/users/Services";
import Booking from "./pages/users/Booking";
import Contact from "./pages/users/Contact";


const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={ <Homepage/> } />
          </Route>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/contact" element = {<Contact/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterLinks

