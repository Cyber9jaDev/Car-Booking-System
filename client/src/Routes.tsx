import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/users/Homepage';
import SharedLayout from './pages/users/SharedLayout';
import Signup from "./pages/users/Signup";
import Login from "./pages/users/Login";
import About from "./pages/users/About";
import Services from "./pages/users/Services";
import Contact from "./pages/users/Contact";
import Home from "./pages/admin/Home";
import Tickets from "./pages/users/Bookings";


const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={ <Homepage/> } />
          </Route>
          <Route path="/register" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/booking" element = {<Tickets/>} />
          <Route path="/admin/home" element={ <Home/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterLinks

