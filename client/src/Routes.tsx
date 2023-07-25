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
import PaymentModal from "./components/modal/PaymentModal";
import PrivateRoute from "./utilities/PrivateRoute";
import PublicRoute from "./utilities/PublicRoute";
import Footer from "./components/users/Footer";
import VerifyPaystackTransaction from "./pages/users/payment/VerifyPaystackTransaction";

const RouterLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={ <Homepage/> } />
        </Route>
        <Route path="/register" element={ <PublicRoute><Signup/></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/passenger-details" element = {<PrivateRoute><PassengerDetails/></PrivateRoute>}/>
        <Route path="/modal" element = {<PaymentModal/>} />
        <Route path="/paystack/verify-payment" element = {<VerifyPaystackTransaction/>} />
        <Route path="/booking" element = { <Bookings/> } />
        <Route path="/admin/home" element={ <Home/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterLinks

