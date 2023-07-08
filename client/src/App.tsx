import RouterLinks from "./Routes";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <main>
        <Toaster />
        <RouterLinks />
      </main>
    </UserContextProvider>
  )
}

export default App;
