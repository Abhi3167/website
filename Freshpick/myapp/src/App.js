
import './App.css';
import AutoPlay from './Component/autoplay_slide';
import Detail from './Component/Detail';
import Detail2 from './Component/Detail2';
import Hero from './Component/hero';
import Home from './Component/home';
import OffcanvasExample from './Component/Navbar';

import { BrowserRouter, Routes, Route } from "react-router";

import Footer from './Component/footer';
function App() {

  
  return <>
<BrowserRouter>
<OffcanvasExample></OffcanvasExample>
   <AutoPlay></AutoPlay>

  {/* <Hero></Hero> */}

       <Routes>
        <Route path='/' element={ <Home></Home>}></Route>
        <Route path='/detail' element={ <Detail></Detail>}></Route>
        <Route path='/detaill/:id' element={ <Detail2></Detail2>}></Route>
    
       </Routes>
       <Footer></Footer>
       </BrowserRouter>
   
  
  
  </>
}

export default App;
