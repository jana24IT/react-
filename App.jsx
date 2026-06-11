import "./App.css";

function App() {
  return (
    <div className="container">

      <div className="card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
          alt="Java Logo"
          className="course-image"
        />
        <h2>Java Programming</h2>
        <p><b>Instructor:</b> James Gosling</p>
        <p><b>Duration:</b> 6 Weeks</p>
        <p><b>Rating:</b> 4.7 </p>
        <p><b>Fee:</b> ₹3,999</p>
      </div>

      <div className="card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
          alt="React Logo"
          className="course-image"
        />
        <h2>React JS</h2>
        <p><b>Instructor:</b> Jordan Walke</p>
        <p><b>Duration:</b> 8 Weeks</p>
        <p><b>Rating:</b> 4.8 </p>
        <p><b>Fee:</b> ₹4,999</p>
      </div>

      <div className="card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          alt="Python Logo"
          className="course-image"
        />
        <h2>Python Basics</h2>
        <p><b>Instructor:</b> Guido van Rossum</p>
        <p><b>Duration:</b> 5 Weeks</p>
        <p><b>Rating:</b> 4.9 </p>
        <p><b>Fee:</b> ₹2,999</p>
      </div>

    </div>
  );
}

export default App;