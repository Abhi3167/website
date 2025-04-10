
import './App.css';
import AutoPlay from './Component/autoplay_slide';
import Detail from './Component/Detail';
import Detail2 from './Component/Detail2';
import Hero from './Component/hero';
import Home from './Component/home';
import OffcanvasExample from './Component/Navbar';

import { BrowserRouter, Routes, Route, useLocation,Navigate } from "react-router-dom";

import Footer from './Component/footer';
import Login from './Component/Login';
import Sign_up from './Component/Sign_up';
import Personal_Care from './Component/personal_care';
import Grocery_staple from './Component/grocery_page';
import Fruits from './Component/fruits_page';
import Colddrink from './Component/colddrink_page';
import Addcategory from './Component/addcategory';
import Search from './Component/serach';
import Cart from './Component/my_cart';

let Layout=({children})=>
  {
   const location=useLocation();
        let hideonRoute=['/signup','/login']

       let hide= hideonRoute.includes( location.pathname)

       return <>
       { !hide && <OffcanvasExample></OffcanvasExample>}
       { !hide && <AutoPlay></AutoPlay>}
       {children}
       { !hide && <Footer></Footer>}
       
       </>
       
      
  }
function App() {

  
  return <>
<BrowserRouter>
<Layout>
{/* <OffcanvasExample></OffcanvasExample>
   <AutoPlay></AutoPlay> */}

  {/* <Hero></Hero> */}

       <Routes>
        <Route path='/' element={ <Navigate to='/login'/>}></Route>
        <Route path='/home' element={ <Home></Home>}></Route>
        <Route path='/detail' element={ <Detail></Detail>}></Route>
        <Route path='/detaill/:id' element={ <Detail2></Detail2>}></Route>
        <Route path='/signup' element={ <Sign_up></Sign_up>}></Route>
        <Route path='/login' element={ <Login></Login>}></Route>
        <Route path='/personal_care' element={ <Personal_Care></Personal_Care>}></Route>
        <Route path='/grocery_staple' element={ <Grocery_staple></Grocery_staple>}></Route>
        <Route path='/Fruits' element={ <Fruits></Fruits>}></Route>
        <Route path='/Colddrink' element={ <Colddrink></Colddrink>}></Route>
        <Route path='/AddCategory/:name' element={ <Addcategory></Addcategory>}></Route>
        <Route path='/search/:name' element={ <Search></Search>}></Route>
        <Route path='/cart' element={ <Cart></Cart>}></Route>


    
       </Routes>
       {/* <Footer></Footer> */}
       </Layout>
       </BrowserRouter>
   
  
  
  </>
}

export default App;
