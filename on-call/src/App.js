import "./index.css";
import SideNav from "./components/SideNav";
import CheckOut from "./components/CheckOut";
import MenuItem from "./components/MenuItem"
import meals from './components/Meals'

function App() {
  const {Pizza} = meals;
  return (
    <div className="flex justify-center h-screen app-container">
      <SideNav />
      <MenuItem Pizza={Pizza} />
      < CheckOut />
    </div>
  );
}

export default App;
