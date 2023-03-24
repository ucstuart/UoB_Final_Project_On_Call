import "./index.css";
import SideNav from "./components/SideNav";
import PizzaItem from "./components/meal-components/PizzaItem";
import Burgers from "./components/meal-components/Burgers"
import Chicken from "./components/meal-components/Chicken"
import Wraps from "./components/meal-components/Wraps"
import Sandwiches from "./components/meal-components/Sandwiches"
import Deserts from "./components/meal-components/Deserts"
import Drinks from "./components/meal-components/Drinks"
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="flex justify-center h-screen app-container">
      <SideNav />
      <Routes>
        <Route path="/PizzaItem" element={<PizzaItem />}></Route>
        <Route path="/Burgers" element={<Burgers/>}></Route>
        <Route path="/Chicken" element={<Chicken />}></Route>
        <Route path="/Wraps" element={<Wraps />}></Route>
        <Route path="/Sandwiches" element={<Sandwiches />}></Route>
        <Route path="/Deserts" element={<Deserts />}></Route>
        <Route path="/Drinks" element={<Drinks />}></Route>

        <Route path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
