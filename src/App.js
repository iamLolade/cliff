import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <ThemeContextProvider>
          <Navbar />
        </ThemeContextProvider>
      </div>
    </>
  );
}

export default App;
