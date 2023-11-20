import React from 'react';
import Navbar from '../Pages/Navbar';
import Logo from '../Pages/Screenshot 2023-11-20 205137.png';
import Team from '../Pages/Team_img.png';
import Service from '../Pages/services_img.png';
import About from '../Pages/about_img.png';
import contact from '../Pages/contact_img.png';
import './Tourism.css'; // Import the CSS file for styling

export default function Tourism() {
  return (
    <div>
      <Navbar />
    <div className="tourism-container">
      <h1 className="tourism-title">Tourist & Hospitality Management System</h1>
      <div className="description-container">
        <h2 className="description-heading">Description:</h2>
        <p className="description-text">
          The Tourist & Hospitality Management System is a comprehensive web-based application designed to streamline the management of tourist accommodations, services, and activities. It serves as a centralized platform where tourists can explore available accommodations, book rooms, and access information about local attractions and services. Additionally, hospitality providers can manage their offerings and reservations through the system. The platform aims to enhance the overall tourist experience and facilitate efficient management for hospitality businesses.
        </p>
      </div>
      <h2 className="section-heading">Home Page</h2>
      <img src={Logo} alt="Home" className="section-image" />
      <h2 className="section-heading">Team Page</h2>
      <img src={Team} alt="Home" className="section-image" />
      <h2 className="section-heading">Services Page</h2>
      <img src={Service} alt="Home" className="section-image" />
      <h2 className="section-heading">About Page</h2>
      <img src={About} alt="Home" className="section-image" />
      <h2 className="section-heading">Contact Page</h2>
      <img src={contact} alt="Home" className="section-image" />
    </div>
    </div>
  );
}
