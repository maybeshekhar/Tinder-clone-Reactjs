import "./App.css";
import Header from "./Header";
import Chat from "./Chat";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      
      <Router>
      <Header backButton="/" />
        <Routes>
        
          
          <Route path="/chat" element={<Chat />} />
          
          <Route path="/" element={<><TinderCards /><SwipeButtons /></>} />
          
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
