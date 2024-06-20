import React, { useEffect } from 'react';
import './Body.css';
import Image from './Saloni.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Body = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='mainbodydiv' id="gotohome">
        <section className='SectionBody'>
            <div className="leftBody">
                <h1 data-aos="fade-up" data-aos-easing="ease">I'm Saloni Chourasiya</h1>
                <h1 id="tex" data-aos="fade-up" data-aos-delay="100">I'm A Full Stack Developer</h1>
                <br />
                <div className='Btns' data-aos="fade-up" data-aos-delay="200">
                    <a  href="mailto:chourasiyasaloni23@gmail.com" target="_blank" rel="noopener noreferrer"><button className='hiremeBtn'>Hire Me</button></a>
                    <a href="https://drive.google.com/uc?export=download&id=1IZWXFrQU_AsCxRH6KBLreYusGAaW7UN2" download="Resume.pdf"><button className='ResumeBtn'>Resume</button></a>
                </div>
                <br /><br />
                <div className="icons" data-aos="fade-up" data-aos-delay="300">
                    <div className="ghub">
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="ghub">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="ghub">
                        <i className="fa-solid fa-code"></i>
                    </div>
                </div>
            </div>
            <div className="rightBody" data-aos="fade-left" data-aos-delay="400">
                <div className="outerImage">
                    <img src={Image} alt="Saloni" className='innerImage' />
                </div>
            </div>
        </section>
    </div>
  );
}

export default Body;
