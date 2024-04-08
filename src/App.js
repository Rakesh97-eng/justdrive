import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Approval from "./components/Approval";
import Manage from "./components/Manage";
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import AllCars from "./pages/allCars/AllCars";
import SelectedCar from './pages/selectedCar/selectedCar';

function App() {
  return (<>
   <Routes>
    <Route exact path="/login" element ={<Login/>}/>
    <Route path='/' element={<Navbar/>}>
    <Route  path="/dashboard" element ={<Dashboard/>}/>
    <Route  path="/approval" element ={<Approval/>}/>
    <Route exact path="/manage" element ={<Manage/>}/>
    <Route exact path="/allcars" element ={<AllCars/>}/>
    <Route exact path="/selectedcars" element ={<SelectedCar/>}/>
    </Route>
   </Routes>
   </>);
}

export default App;
