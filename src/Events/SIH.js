import React from 'react';
import Navbar from '../Pages/Navbar';
import Prototype from './sih.jpg';
import Prototype1 from './sih1.jpg';
import Video from './explain_video.mp4';
import './SIH.css'; 

export default function SIH() {
  return (
    <div>  <Navbar />
    <div className="tourism-container">
      <h1 className="tourism-title">Centralized Monitoring System for Street Light Fault Detection and Location Tracking</h1>
      <div className="description-container">
        <h2 style={{ textAlign: 'left' }}>Description:</h2>
        <p className="description-text">
          Electricity is a critical need for the progress of livelihood. In many Indian cities, the maintenance of street lights has become a challenging and inefficient process due to the lack of a centralized monitoring system. Identifying faults, such as non-functioning lights, current leakage, and cable breakage, relies on citizen grievances, leading to delays, increased costs, and safety concerns. Linemen spend valuable time manually searching for faults, diagnosing issues, and fixing them, which can take several days to complete. The absence of precise fault location information further complicates the process. To overcome these obstacles, we seek an innovative solution that provides real-time fault detection, accurate identification of fault types, and precise location tracking of faulty street lights. This solution aims to empower linemen with efficient fault management capabilities, reducing their workload and ensuring timely maintenance. Moreover, it should enable the local authorities to proactively address faults, enhance service quality, and optimize street light maintenance processes in their respective cities. The prime aim of this problem statement is to develop an "Automated Defect Detection and Prevention Assistance with Effective Governance for Cities in India.
        </p>
      </div>

      <h2 style={{ textAlign: 'left' }}>Category:</h2>
      <p className="description-text">Hardware</p>

      <h2 style={{ textAlign: 'left' }}>Technology Bucket:</h2>
      <p className="description-text">Smart Automation</p>

      <h2 style={{ textAlign: 'left' }}>Organization's Type:</h2>
      <p className="description-text">State Ministry</p>

      <h2 style={{ textAlign: 'left' }}>Prototype:</h2>
      <img src={Prototype} alt="Home" className="section-image" />
      <img src={Prototype1} alt="Home" className="section-image" width="600" height="600" />

      <h2 style={{ textAlign: 'left' }}>Working Model:</h2>
      <video id="myVideo" width="640" height="360" controls>
  <source src={Video} type="video/mp4" />
</video>

    </div>
    </div>
  );
}
