import React from 'react'
import './Footer.css'

const Footer = () => {
    AOS.refresh();
  return (
    <div className='MainFoot'>
        <footer>
        <div className='iconsfooter' >
            {/* <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-github"></i>
        </div>
        </footer>
    </div>
  )
}

export default Footer