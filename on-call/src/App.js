import "./index.css";
import "./index";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Review from "./components/Review";
import SecondNav from "./components/SecondNav";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app-container">
   
      <SecondNav />
    
      <Routes>
        <Route path="/" element={<Hero/> } />
        <Route path="Home" element={<Home />} />
        <Route path="Review" element={ <Review /> } />
      </Routes>
    </div>
  );
}

export default App;
