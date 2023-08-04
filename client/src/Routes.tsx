import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/users/Homepage';
import SharedLayout from './pages/users/SharedLayout';
import Signup from "./pages/users/Signup";
import Login from "./pages/users/Login";
import About from "./pages/users/About";
import Services from "./pages/users/Services";
import Contact from "./pages/users/Contact";
import Home from "./pages/admin/Home";
import Bookings from "./pages/users/Bookings";
import PassengerDetails from "./pages/users/PassengerDetails";
import PrivateRoute from "./utilities/PrivateRoute";
import PublicRoute from "./utilities/PublicRoute";
import Profile from "./pages/users/Profile";
import BookingConfirmation from "./pages/users/payment/BookingConfirmation";
import Settings from "./pages/users/Settings";

const RouterLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={ <Homepage/> } />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="booking" element = { <Bookings/> } />
          <Route path="booking/passenger-details" element = {<PrivateRoute><PassengerDetails/></PrivateRoute>}/>
          <Route path="profile" element = { <PrivateRoute><Profile/></PrivateRoute> } />
          <Route path="profile/settings" element = { <PrivateRoute><Settings/></PrivateRoute> } />
        </Route>
        <Route path="/register" element={ <PublicRoute><Signup/></PublicRoute>} />
        <Route path="login" element={<PublicRoute><Login/></PublicRoute>}/> 
        <Route path="/paystack/verify" element = {<BookingConfirmation/>} />
        <Route path="/admin/home" element={ <Home/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default RouterLinks

