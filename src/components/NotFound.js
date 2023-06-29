import React from 'react'
import { BsFillEmojiFrownFill } from 'react-icons/bs'

export default function NotFound() {
  return (
    <div className=' vh-100 fw-bolder container' style={{background:'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);'}}>
    
    <h1 className=' m-auto  text-center mt-5 pt-5'> 404 Page not Found</h1>
    <p className='text-center fs-1'><BsFillEmojiFrownFill/></p>
     </div>
  )
}
