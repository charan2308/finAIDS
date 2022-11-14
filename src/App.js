import './App.css';
import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";


function App() {

  return (
    <div className="App">
      <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <ThemeSwitcher/>
      </div>
      </div>
    </div>
  );
}

export default App;