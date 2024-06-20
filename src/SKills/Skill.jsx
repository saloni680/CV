import React,{useEffect} from 'react'
import './Skill.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div id="skills" className="skillsSection">
        <br /><br /><br /><br />
        <hr className='SkillHr'/>
        <br /><br /><br /><br />
        <h1 className='SkillHrH1'data-aos="zoom-in" >Skill</h1>
        <br /><br /><br /><br /><br />
        <div className='secSkilldiv' data-aos="zoom-in">
            <br /><br /><br />
            <div className="innerskill">
            <section className='Skillsect'>
                <div className="mainSkill">
                    <i className="fa-brands fa-html5"></i>HTML
                    <div className="outerbar">
                            <div className="innerbarHtml">
                            </div>
                    </div>
                </div>
                <div className="mainSkill">
                    <i className="fa-brands fa-css3-alt"></i>CSS
                    <div className="outerbar">
                            <div className="innerbarCSS">
                            </div>
                    </div>
                </div>
                <div className="mainSkill">
                    <i className="fa-brands fa-bootstrap"></i>Boot strap
                    <div className="outerbar">
                            <div className="innerbarBootstrap">
                            </div>
                    </div>
                </div>
                <div className="mainSkill">
                    <i className="fa-brands fa-github"></i>Github
                    <div className="outerbar">
                            <div className="innerbarGhub">
                            </div>
                    </div>
                </div>
                <div className="mainSkill">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="tailwind-css"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
                    Tailwind CSS
                    <div className="outerbar">
                            <div className="innerbarTwind">
                            </div>
                    </div>
                </div>
            </section>
            
            <div className="ReactMain">
                 <div className="react">
                    <i className="fa-brands fa-react"></i>
                 </div>
                 <br />
                 <div className="react">
                 <i className="fa-brands fa-js"></i>
                 </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skill