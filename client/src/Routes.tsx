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
import { BookingContextProvider } from "./contexts/BookingContext";
import PassengerDetails from "./pages/users/PassengerDetails";
import PaymentModal from "./components/users/modals/PaymentModal";
import Thanks from "./pages/users/Thanks";


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
          <Route path="/passenger-details" element = {<PassengerDetails/>} />
          <Route path="/modal" element = {<PaymentModal/>} />
          <Route path="/paystack/callback" element = {<Thanks/>} />
          <Route path="/booking" element = {
            <BookingContextProvider>
              <Bookings/>
            </BookingContextProvider>} />
          <Route path="/admin/home" element={ <Home/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterLinks

