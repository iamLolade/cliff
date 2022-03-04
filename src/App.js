import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <nav>
        <h2>Cliff</h2>
      </nav>
      <div className="App">
        <ThemeContextProvider>
          
        </ThemeContextProvider>
      </div>
    </>
  );
}

export default App;
