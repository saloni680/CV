import React, { useEffect, useState } from 'react'
import './Project.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import spage  from './staticPage.png'
import Timg from './Taximg.png'
import Wapp from './Wapp.png'

const Project = () => {
    // const[data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:3000/data')
    //     .then(d=>d.json())
    //     .then(mydata=>{
    //         console.log(mydata);
    //         setData(mydata)
    //     })
    // },[])
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div className='mainProjectdiv' id="projects" >
        <br /><br /><br /><br />
        <hr className='ProjectHr'/>
        <br /><br /><br /><br />

        <h1 className='ProjectHrH1' data-aos="zoom-in">Projects</h1>
        <br /><br />

        <div className='secProjectdiv' data-aos="fade-up">

        <Card className='card' >
            <Card.Img variant="top" src={Wapp} style={{width: '100%',height:'50%',objectFit: 'cover'}} />
            <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                    Using ReactJs and APi Integration Live weather details using pincode or city name
                </Card.Text>
                <a href="https://saloni680.github.io/WApplication/"><Button variant="primary" >Live Demo</Button></a>
            </Card.Body>
            </Card>
            <Card className='card' >
                <Card.Img variant="top" src={Timg} style={{width: '100%',height:'50%',objectFit: 'cover'}} />
                <Card.Body>
                    <Card.Title>Tax App</Card.Title>
                    <Card.Text>
                        Created Using ReactJs and can calculate tax based on given inputs
                    </Card.Text>
                    <a href="https://saloni680.github.io/TaxCalci/"><Button variant="primary" >Live Demo</Button></a>
                </Card.Body>
            </Card>
            <Card className='card' >
            <Card.Img variant="top" src={spage} style={{width: '100%',height:'50%',objectFit: 'cover'}} />
            <Card.Body>
                <Card.Title>Static Page</Card.Title>
                <Card.Text>
                    Using ReactJs created a static imaginary webpage
                </Card.Text>
                <a href="https://avaesa.netlify.app/"><Button variant="primary" >Live Demo</Button></a>
            </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Project