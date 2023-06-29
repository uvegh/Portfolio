// cls
import "./Sass/styles.css";
import Home from "./components/Home";

import Navigation from "./components/Navigation";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";




function App() {
  return (
    <>
    {/* everything wrapped has eccess to the blog provider */}

    

    <BrowserRouter>
    {/* <Navigation/> */}
<Routes>

<Route path='/' element={<Home />}/>

<Route path ='*' element={<NotFound />} />
{/* dynamic route withsemicolon */}





</Routes>
 <Footer/>
    </BrowserRouter>
  
    </>
      
  );
}

export default App;
