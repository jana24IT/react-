import React from "react";
import "./CourseCard.css";

function CourseCard() {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/250x150"
        alt="Course"
        className="course-image"
      />
      <h2>Java Programming</h2>
      <p><b>Instructor:</b> James Gosling</p>
      <p><b>Duration:</b> 6 Weeks</p>
      <p><b>Rating:</b> 4.7 ⭐</p>
      <p><b>Fee:</b> ₹3,999</p>
    </div>
  );
}

export default CourseCard;