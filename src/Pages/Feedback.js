import React from 'react';
import './FeedbackForm.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function Feedback() {
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        <button type="submit" component={Link} to="/">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
}

export default Feedback;