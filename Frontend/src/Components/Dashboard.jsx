import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dashboard.css';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';

function Dashboard() {
  return (
    <div className="containers">
      <header className="headerr">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="titlee">National Scholarship Portal</div>
      </header>
      <div className="main-container">
        <div className="sidebar">
          <div className="profile">
            <img src={logo1} alt="Profile" />
            <h3>Hello User!</h3>
          </div>
          <div className="nav-container">
            <nav>
              <ul>
                <li className='li'><Link to="/forms">My Profile</Link></li>
                <li className='li'>Add and Update Details</li>
                <li className='li'>Application Status</li>
                <li className='li'>Contact Us</li>
                <li className='li'><Link to="/home">Logout</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="dashboard">
          <div className="profile-section">
            {/* <img src={logo} alt="Profile" className="profile-pic" /> */}
            <h2>Welcome!</h2>
          </div>
          <div className="scholarship-forms">
            <h2 className='forms-heading'>Scholarship Forms</h2>
            <h6><Link to="/forms">Note: Please Set up your profile before applying for any scholarship</Link></h6>
            <table>
              <thead>
                <tr>
                  <th>List of Scholarships</th>
                  {/* <th>Download Link</th> */}
                </tr>
              </thead>
              <tbody>
                {/* {scholarshipForms.map((form, index) => (
                  <tr key={index}>
                    <td>{form.name}</td>
                    <td><a href={form.downloadLink} target="_blank" rel="noopener noreferrer">Download</a></td>
                  </tr>
                ))} */}
                <tr>
                  <td><Link to="/ntse">Ntse Scholarship Form</Link></td>
                </tr>
                <tr>
                  <td><Link to="/caste">Caste Scholarship Form</Link></td>
                </tr>
                <tr>
                  <td><Link to="/female">Female Scholarship Form</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;