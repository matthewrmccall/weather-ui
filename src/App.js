import React from 'react';

const api = {
  key: "b9fc5a67d8e7f7b86c0f6f9b74be3dc7",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search...."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
