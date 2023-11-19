import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import axios from 'axios';
import './FeedbackForm.css';
import Navbar from './Navbar';
import { Button } from '@mui/material';
function FeedbackForm() {
  const [formData, setFormData] = useState({
    experience: 'Excellent',
    suggestion: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:6969/feedback', formData)
      .then((response) => { 
        console.log(response.data);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>

    <Navbar />
    <div className="feedback-form-container">

      <form onSubmit={handleSubmit}>
        <label className="feedback-label">
          Overall Experience:
          <select name="experience" value={formData.experience} onChange={handleChange}>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </label>
        <label className="feedback-label">
          Suggestions for Improvement:
          <textarea
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
          ></textarea>
        </label>
        <label className="feedback-label">
          Additional Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </label>
        <Button type="submit" className="submit-button" component={Link} to="/">Submit Feedback</Button>
      </form>
    </div>
    </div>
      );
}

export default FeedbackForm;