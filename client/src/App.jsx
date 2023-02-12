import React from 'react';
import Home from "./homepage";
import Login from "./login.jsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
