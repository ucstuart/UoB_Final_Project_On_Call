
import './index.css'
import SideNav from './components/SideNav';
import PizzaItem from './components/PizzaItem';
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <Routes>
        <Route path="/PizzaItem" element={<PizzaItem />}>
          
</Route>
      </Routes>

      </div>
  );
}

export default App;
