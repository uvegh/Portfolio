import React from 'react'

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <>
    <footer className="opacity-75  ">
  <div className="container">
      <div className="row">
          <div className="col-md-12">
              <div className="primary-button text-center mt-4">
                  {/* <Link href="#home" className="btn ">Back To Top</Link> */}
              </div>
              <ul className="list-unstyled socials  m-auto d-flex justify-content-between pt-5">
                  <li><Link href="#" target="blank" className="rounded-circle p-2"><FaTwitter  className='icon' /></Link></li> 
                   <li><a href="https://github.com/uvegh" target="blank"  className="rounded-circle p-2" >  <FaGithub  className='icon'/></a></li>
                  <li><a href="https://www.linkedin.com/in/eghobamien-vincent-03a124211/" target="blank"  className="rounded-circle p-2" ><FaLinkedin  className='icon' /></a></li>
                  <li><a href="https://uveghobamien@gmail.com" target="blank"  className="rounded-circle p-2" > <AiOutlineMail  className='icon'/></a></li>
                
              </ul>
              <p className="text-center mt-5 pt-5">Copyright ©2023 centeDev 
      
          - Design </p>
          </div>
      </div>
  </div>
</footer>




    </>
  )
}
