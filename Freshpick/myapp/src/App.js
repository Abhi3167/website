
import './App.css';
import AutoPlay from './Component/autoplay_slide';
import Detail from './Component/Detail';
import Detail2 from './Component/Detail2';
import Hero from './Component/hero';
import Home from './Component/home';
import OffcanvasExample from './Component/Navbar';

import { BrowserRouter, Routes, Route } from "react-router";
function App() {

  
  return <>
<BrowserRouter>
<OffcanvasExample></OffcanvasExample>
   <AutoPlay></AutoPlay>

       <Routes>
        <Route path='/' element={ <Home></Home>}></Route>
        <Route path='/detail' element={ <Detail></Detail>}></Route>
        <Route path='/detaill' element={ <Detail2></Detail2>}></Route>
    
       </Routes>
       </BrowserRouter>
   
  
  
  </>
}

export default App;
