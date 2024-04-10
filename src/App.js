import './App.css';
import Login from "./components/Login";
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { routesinfo } from './utils/routedata';

function App() {
 const GetRoutes =(routedetail)=>{
  const {path,elementname} = routedetail
    return <Route path={path} element={elementname}></Route>
 }

  return (<>
   <Routes>
    <Route exact path="/login" element ={<Login/>}/>
    <Route path='/' element={<Navbar/>}>
      {routesinfo.map((route)=>{
        return GetRoutes(route)
      })}
    </Route>
   </Routes>
   </>);
}

export default App;
