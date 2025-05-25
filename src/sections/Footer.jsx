import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
     <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center md:items-start items-center'>
          <a href='mailto:bheemareddy2910@gmail.com'>bheemareddy2910@gmail.com</a>
        </div>
         <div className='socials'>
          {socialImgs.map((img)=>(
             <a className='icon' target='_blank' rel='noreferrer' href={img.url} key={img.url}>
              <img src={img.imgPath}   />
             </a>
          ))}

         </div>
         <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>
            &copy; {new Date().getFullYear()} Bheemareddy. All rights reserved.
          </p>

         </div>
      </div>

     </footer>
  )
}

export default Footer