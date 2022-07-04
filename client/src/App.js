import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="page-content-container">Hello</div>
      <div className="navbar">
        <div class="screen-width-container">
          <i class="fa-solid fa-user"></i>
          <div class="search-bar-container">
            <input
              type="search"
              name="symbol-search-box"
              id="symbol-search-box"
              placeholder="Symbol..."
            ></input>
            <button type="submit" id="search-submit-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-house"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
