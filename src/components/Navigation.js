
import { Link } from "react-router-dom";

import{BiMoon} from 'react-icons/bi'
import{GiHamburgerMenu}from 'react-icons/gi'
import { useRef } from "react";
function Navigation() {
  
const handleScroll=(id)=>{
  const element=document.getElementById(id)
  element.scrollIntoView({behaviour:'smooth'})
}

  return (
<nav className="navbar navbar-expand-lg ">
  <div className="container pt-3">
    <button className="navbar-toggler me-auto text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"><GiHamburgerMenu/></span>
    </button>
   {/* <Link className="navbar-brand" >Eghobamien <span className="text-light">Vincent</span></Link> */}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" >Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" 
          onClick={()=>{
            handleScroll("services")
          }}></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href="#about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href>Contact</Link>
        </li>
      </ul>
     
      <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item rounded ">
          <Link className="nav-link  p-2 " aria-current="page" href="#">
            <BiMoon/>
          </Link>
        </li>
        <li className="nav-item rounded  border text-decoration-none border-light ">
          <Link className="nav-link  p-2" aria-current="page" href="#">Resume</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navigation;
