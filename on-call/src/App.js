import "./index.css";
import "./index";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Review from "./components/Review";
import ContactUs from "./components/ContactUs";
import SecondNav from "./components/SecondNav";

function App() {
  return (
    <div className="app-container">
      <SecondNav/>
      <Routes>
        <Route path="Home" element={ <Home />}/>
        <Route path="Review" element={ <Review /> } />
      </Routes>
       
     
    </div>
  );
}

export default App;
