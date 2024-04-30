import './App.css';
import Navbar from './component/Navbar';
import Food from './component/Food';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Subnav from './component/Subnav';
import Cart from './component/Cart';
import { Route, Routes, useLocation } from 'react-router-dom';
import BreakFast from './component/BreakFast';
import Dinner from './component/Dinner';
import Lunch from './component/Lunch';
import Login from './component/Login'
import Burgers from './component/Burgers';
import Chick from './component/Chick';
import Desserts from './component/Desserts';
import Pizzanians from './component/Pizzanians';
import UserDetails from './component/UserDetails';
import Orderid from './component/Orderid';
import Protected from './component/Protected';
import Protectedlog from './component/Protectedlog';



function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/logout'  element={<Login/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/userDetails' element={<Protectedlog Component= {UserDetails}/>}/>
        <Route path='/cart/orderId'  element={<Protectedlog Component= {Orderid}Orderid/>}/>
        <Route path='*' element={<Subnav/>}/>
      </Routes>
    
      <Routes>
        <Route path='/'  element={<Food/>}/>
        <Route path='/breakfast'  element={<BreakFast/>}/>
        <Route path='/lunch'  element={<Lunch/>}/>
        <Route path='/dinner'  element={<Dinner/>}/>
        <Route path='/burger'  element={<Burgers/>}/>
        <Route path='/chick'  element={<Chick/>}/>
        <Route path='/desserts'  element={<Desserts/>}/>
        <Route path='/pizzanians'  element={<Pizzanians/>}/>
        
      </Routes>
    </div>
  )
}

export default App;
