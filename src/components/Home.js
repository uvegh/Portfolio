import { Link, useNavigate } from "react-router-dom";
import { BsInstagram, BsStack } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import profile from "../img/profile.jpg";



import{BiMoon} from 'react-icons/bi'
import{GiHamburgerMenu}from 'react-icons/gi'
import { useEffect, useRef, useState } from "react";
import pf1 from "../img/pf1.png"
import pf2 from "../img/pf2.png"
import pf3 from "../img/pf3.png"
import pf4 from "../img/pf4.png"
import pf5 from "../img/pf5.png"
import pf6 from "../img/pf6.png"

import rework from "../img/rework.jpg"

import { FaArrowRight, FaEnvelope, FaEnvelopeOpen, FaMailchimp, FaPhoneAlt } from "react-icons/fa";
import Stars from "./Stars";

function Home() {

  const servicesRef=useRef(null)
  const portfolioRef=useRef(null)
  const aboutRef=useRef(null)
  const contactRef=useRef(null)
const[lightMode,setLightMode]=useState('dark')
  const handeClick=(ref)=>{
    ref.current?.scrollIntoView({behaviour:'smooth'})
  }

  // const bodyStyle={ background:lightMode?'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);':'white'
    
  // }
  const navigate=useNavigate()

  const toggleLightMode=()=>{
    if(lightMode=='dark'){
      setLightMode('light')
    }
    else{
      setLightMode('dark')
    }
   
  }
useEffect(()=>{
document.body.className=lightMode
},[lightMode])

  return (
    
  
    <>

    
      {/* <StarField
      style={{
        position: "fixed",
        width: "100%",
        height: "500%",
        top:'30%'
      }}
      numParticles={800}
      particleSpeed={0}
      dx={0.000000001} // x speed of stars in px/frame, default 0.05
      dy={0.000000001} >*/}
    
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container pt-3">
    <button className="navbar-toggler me-auto text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"><GiHamburgerMenu/></span>
    </button>
   {/* <Link className="navbar-brand" >Eghobamien <span className="text-light">Vincent</span></Link> */}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"
            onClick={()=>{
            handeClick(servicesRef)
          }}
          
           aria-current="page" >Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" 
           onClick={()=>{
            handeClick(portfolioRef)
          }}
          > Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"
          onClick={()=>{
            handeClick(aboutRef)
          }}
          >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " 
            onClick={()=>{
            handeClick(portfolioRef)
          }}
          >Contact</Link>
        </li>
      </ul>
     
      <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item rounded ">
          <Link className="nav-link  p-2 " onClick={toggleLightMode}>
            <BiMoon/>
          </Link>
        </li>
        <li className="nav-item rounded  border text-decoration-none border-light ">
          <Link className="nav-link  p-2" target="blank" onClick={()=>{
            window.open("https://my.recruit.net/VincentEghobamien_Resume",'_blank')
          }} >Resume</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
 
    <div className="myHomePage container " style={{overflow:'hidden'}}>
      <section className="intro  m-auto row gx-lg-5 gy-sm-5 px-sm-5 text-center" style={{color:lightMode=='light'?'black':null}} ref={aboutRef}>
        <div className="col-lg-6 col-md-6 col-sm-12 text-start">
          <div>
            <p className="text-uppercase">
              
              <span className="underline"></span> My name is
            </p>
            <h4>
              Eghobamien <span>Vincent</span>
            </h4>
            <p className="about-me mt-3">
              I have over a year of experience as a fullstack MERN developer,
              proficient in Mongo, Express, React, and Node.js. I specialize in
              front-end development using React, and I am skilled in JavaScript,
              HTML, CSS, and Bootstrap. I am passionate about expanding my
              knowledge and constantly seeking new opportunities to learn and
              grow in my career. My journey as a developer is marked by a strong
              eagerness to acquire new skills and stay up-to-date with the
              latest industry trends.
            </p>
            <footer className="d-flex justify-content-between col-lg-4 col-sm-4 col-md-6">
              <Link to="">
                <BsInstagram />
              </Link>
              <Link target="blank" to="https://www.linkedin.com/in/eghobamien-vincent-03a124211/">
                <FiLinkedin />
              </Link>{" "}
              <Link   target="blank"  to ="https://github.com/uvegh">
                <AiFillGithub />
              </Link>{" "}
              <Link>
                <TbBrandTwitter />
              </Link>
            </footer>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <section>
            <img className=" mt-sm-3  profile" src={profile} alt="" />
          </section>
        </div>
      </section>
      <Stars/>

      <section className="mt-5 " ref={servicesRef}>
        <header>
          <p className="text-uppercase text-center fw-light">
            
            <span className="underline"></span> SERVICES
          </p>
          <h4 className="text-center fw-bolder">Specialized In</h4>

          <main>
            <div className="container services overflow-hidden text-center mt-5">
              <div className="row gx-lg-5 gy-sm-4  m-auto">
                <div className="col-lg-4 col-sm-12  col-md-12">
                  <div className="p-3 border bg-light rounded service ">
                    <div className="mt-auto mb-auto">
                      <p>
                        <BsStack />
                      </p>
                      <p className="fw-bold mt-2">Full Stack MERN </p>
                      <p className="text-center mt-2">
                        Standard designing, building, and implementing your
                        applications with MERN(Mongo Express React Js) Stack .
                      </p>
                    </div>
                  </div>
                </div>
               
                <div className="col-lg-4 col-sm-12 col-md-12">
                  <div className="p-3 border bg-light rounded service ">
                    <div className="mt-auto mb-auto">
                      <p>
                        <BsStack />
                      </p>
                      <p className="fw-bold mt-2">Application Development</p>
                      <p className="text-center mt-2">
                      Both front-end and back-end technologies,  understanding of the entire web development process, handling handle end-to-end application development and delivery of  complete, integrated solutions.
                      </p>
                    </div>
                  </div>
                </div>

                
                <div className="col-lg-4 col-sm-12 col-md-12">
                  <div className="p-3 border bg-light rounded service ">
                    <div className="mt-auto mb-auto">
                      <p>
                        <BsStack />
                      </p>
                      <p className="fw-bold mt-2">Front End Development</p>
                      <p className="text-center mt-2">
                      Creating engaging user interfaces using technologies such as HTML, CSS, and JavaScript, ensuring seamless interaction and intuitive user experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </header>
      </section>

      <section className="mt-5 container Portfolio mb-5" ref={portfolioRef}>
        <header className="text-start">
          <p className="text-uppercase  fw-light">
           
            <span className="underline bg-light "></span> MY WORKS
          </p>
          <h4 className=" fw-bolder">Featured Portfolios</h4>
</header>
          <main>
            <div className="container  overflow-hidden text-center mt-5 py-sm-4">
              <div className="row gx-5 g-sm-3">
              <div className="col-lg-4 col-sm-12 col-md-12">
                 <div className="rounded-bottom img-container">
                 <div className="mt-auto mb-auto position-relative">
                 <div className="imgOverlay "></div>
                 <img className="img-fluid" src={pf1} alt="" />
                 </div>
                 <footer className="">
                 <section className="col-lg-10 col-sm-11 col-md-10 m-auto">
                  <p className="fw-bolder ">E-commerce website
                  <br /> <span className="fw-light"> (sassiholford.com large screen UI replica)</span> </p>
                  
                  <section className="tags">
<p>HTML</p> <p>CSS</p><p>JQuery</p> <p>Javascript</p><p>Ajax</p>
                  </section>
                  <a  className="text-decoration-none text-light btn btn-primary mb-2" target="blank" href="https://uvegh.github.io/SASSIHOLFORDUI/">
                  View
                  </a>
                  </section>
                 </footer>
                 </div>
               </div>
              
               
                  <div className="col-lg-4 col-sm-12 col-md-12">
                 <div className="rounded-bottom img-container">
                 <div className="mt-auto mb-auto position-relative">
                 <div className="imgOverlay "></div>
                 <img className="img-fluid" src={pf2} alt="" />
                 </div>
                 <footer className="">
                 <section className="col-lg-10 col-sm-11 col-md-10 m-auto">
                  <p className="fw-bolder ">E-commerce website
                  <br /> <span className="fw-light"> (mahabis.com large screen UI replica)</span> </p>
                  
                  <section className="tags">
<p>HTML</p> <p>CSS</p><p>JQuery</p> <p>Javascript</p><p>Ajax</p>
                  </section>
                  <a  className="text-decoration-none text-light btn btn-primary mb-2" target="blank" href="https://uvegh.github.io/mahabisUI/">
                  View
                  </a>
                  </section>
                 </footer>
                 </div>
               </div>

               <div className="col-lg-4 col-sm-12 col-md-12">
                 <div className="rounded-bottom img-container">
                 <div className="mt-auto mb-auto position-relative">
                 <div className="imgOverlay "></div>
                 <img className="img-fluid" src={pf3} alt="" />
                 </div>
                 <footer className="">
                 <section className="col-lg-10 col-sm-11 col-md-10 m-auto">
                  <p className="fw-bolder ">Hospital Management System
                  <br /> <span className="fw-light"> (Complete hospital and staff management system)</span> </p>
                  
                  <section className="tags">
<p>React</p> <p>Node</p><p>Express</p> <p>MongoDB</p>
                  </section>
                 
                  <a  className="text-decoration-none text-light btn btn-primary mb-2" target="blank" href="https://gavohms.netlify.app/">
                  View
                  </a>
               
                  </section>
                 </footer>
                 </div>
               </div>

               <div className="col-lg-4 col-sm-12 col-md-12">
                 <div className="rounded-bottom img-container">
                 <div className="mt-auto mb-auto position-relative">
                 <div className="imgOverlay "></div>
                 <img className="img-fluid" src={pf4} alt="" />
                 </div>
                 <footer className="">
                 <section className="col-lg-10 col-sm-11 col-md-10 m-auto">
                  <p className="fw-bolder ">Blog Application 
                  <br /> <span className="fw-light"> (tumblr.com replica)</span> </p>
                  
                  <section className="tags">
                  <p>React</p> <p>Node</p><p>Express</p> <p>MongoDB</p>
                  </section>
                  <a  className="text-decoration-none text-light btn btn-primary mb-2" target="blank" href="https://centeblog.netlify.app/">
                  View
                  </a>
                  </section>
                 </footer>
                 </div>
               </div>

               <div className="col-lg-4 col-sm-12 col-md-12">
                 <div className="rounded-bottom img-container">
                 <div className="mt-auto mb-auto position-relative">
                 <div className="imgOverlay "></div>
                 <img className="img-fluid" src={pf5} alt="" />
                 </div>
                 <footer className="">
                 <section className="col-lg-10 col-sm-11 col-md-10 m-auto">
                  <p className="fw-bolder ">E-commerce website
                  <br /> <span className="fw-light"> (BestBuy.com  replica)</span> </p>
                  
                  <section className="tags">
                
                  <p>React</p> <p>Rest API</p><p>Bootstrap</p> 
                  </section>
                  <a  className="text-decoration-none text-light btn btn-primary mb-2" target="blank" href="https://centebestbuy-ui.netlify.app/">
                  View
                  </a>
               
                  </section>
                 </footer>
                 </div>
               </div>

               <div className="col-lg-4 col-sm-12 col-md-12">
                 <div className="rounded-bottom img-container">
                 <div className="mt-auto mb-auto position-relative">
                 <div className="imgOverlay "></div>
                 <img className="img-fluid" src={pf6} alt="" />
                 </div>
                 <footer className="">
                 <section className="col-lg-10 col-sm-11 col-md-10 m-auto">
                  <p className="fw-bolder ">BoltFood UI
                  <br /> <span className="fw-light">(@boltfood.com ui replica) </span> </p>
                  
                  <section className="tags">
<p>HTML</p> <p>CSS</p><p>Bootstrap</p> 
                  </section>
                  <a  className="text-decoration-none text-light btn btn-primary mb-2" target="blank" href="https://uvegh.github.io/BoltFood/">
                  View
                  </a>
                  </section>
                 </footer>
                 </div>
               </div>
              </div>
            </div>
          </main>
        
      </section>



      <section className="mt-5 container experience " >
        <header className="text-start">
          <p className="text-uppercase  fw-light fs-6" >
         
            <span className="underline fs-6 fst-italic"></span> CAREER PATH
          </p>
          <h4 className=" fw-bolder">Work Experience</h4>
          </header>
          <main>
            <div className="  overflow-hidden text-center mt-5">
              <div className="row gx-5 ">
                <div className="col-lg-4 col-sm-10 col-md-4">
                  <div className=" ">
                    <div className="mt-auto mb-auto">
                    
                     <ul className="">
<li className="bg-light text-dark p-2 rounded d-flex justify-content-between">
  Rework Academy <span className="arrow-experience"> <FaArrowRight/></span>
</li>
                     </ul>
                    </div>
                  </div>
                </div>
               
                <div className="col-lg-8 col-sm-10 col-md-8 text-start ">
                  <div className=" ">
                    <div className="mt-auto mb-auto"><a target="_blank" href="http://www.reworktechnologies.com/about/">
                    <img className="rounded rework" src={rework}  />
                    </a>
                      <p className="fw-light mt-2 ">FullStack Trainee and Developer</p>
                      <p className=" mt-2  fs-6">
                       FCT Abuja,Nigeria
                       <br /> August 2021 -August 2023

                       <section className="tags  justify-content-between">
<p>HTML</p> <p>CSS</p><p>JQuery</p> <p>Javascript</p><p>Ajax</p> <p>MongoDb</p> <p>React</p> <p>Node js</p> <p>Express js</p> <p>Bootstrap</p>
                  </section>
                      </p>
                      <a className="btn btn-primary mb-3" target="_blank" href="http://www.reworktechnologies.com/about/">
                        See more about rework
                      </a>
                    </div>
                  </div>
                </div>

                
                
              </div>
            </div>
          </main>
      
      </section>


      <section className="mt-5 container experience " >
        <header className="text-start">
          <p className="text-uppercase  fw-light fs-6" >
         
            <span className="underline fs-6 fst-italic"></span> Contact
          </p>
        
          </header>
          <main>
            <div className="  overflow-hidden text-center mt-5">
              <div className="row gx-5 ">
                <div className="col-lg-4 col-sm-12 col-md-4">
                  <div className=" ">
                    <div className="mt-auto mb-auto text-start">
                    
                    <h4 className=" fw-bolder">Contact me here</h4>
                    </div>
                  </div>
                </div>
               
                <div className="col-lg-8 col-sm-12 col-md-8 text-start ">
                  <div className=" ">
                    <div className="mt-auto mb-auto">
                <p className="d-flex text-light fs-4">  <FaPhoneAlt/> <span className="ms-2">+23408124367595</span> </p>   
                  <p className="d-flex fs-4">  <FaEnvelope/> <a className=" ms-2" href="https://uveghobamien@gmail.com">uveghobamien@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                
                
              </div>
            </div>
          </main>
      
      </section>
    </div>
    </>
  );
}

export default Home;
