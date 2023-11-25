// About.js
import './styles.css'
import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <h2 className='head'>About Us</h2>
      <div className='container'>
      <p>
        This is our FitnessApp using MERN STACK 
        We have used CRUD operations in the Website 
        <br />Sign in and Checkout our Website
      </p>
      <p className='uh'>
        Team Members
        <ul>
            <li>Kiruthik Arun(21BLC1516)</li>
            <li>Neharika Rajendran(21BLC1662)</li>
            <li>Dharanidhar Pushkar Reddy(21BCE5206)</li>
            <li>Mohit Praharaj(21BEC1206)</li>
            <li>Gireesh Pandya(21BPS1454)</li>
        </ul>
      </p>
      </div>
    </div>
  );
}

export default About;