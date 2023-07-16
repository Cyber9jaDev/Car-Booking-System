import RouterLinks from "./Routes";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./contexts/UserContext";
import { BookingContextProvider } from './contexts/BookingContext';

function App() {
  return (
    <UserContextProvider>
      <BookingContextProvider>
        <Toaster />
        <RouterLinks />
      </BookingContextProvider>
    </UserContextProvider>
  )
}

export default App;
