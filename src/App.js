import BookContextProvider, {BookContext} from "./contexts/BookContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
        <BookContextProvider>
          <Navbar />
        </BookContextProvider>
    </>
  );
}

export default App;
