import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation
import './Register.css'; // Import the CSS file for styling

const userdata = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  // Add more users as needed
];

function Register({ setUsername }) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = () => {
    const existingUser = userdata.find((u) => u.username === inputUsername);
    if (existingUser) {
      setError("Username already exists");
    } else {
      userdata.push({ username: inputUsername, password: inputPassword }); // Add new user
      setUsername(inputUsername); // Set username on successful signup
      console.log(`Registered and logged in ${inputUsername}`); // Log for verification
      navigate("/"); // Redirect to home page
    }
  };

  return (
    <div className="register-container"> {/* Add a container for styling */}
      <h2 className="register-title">Register</h2> {/* Add a title */}
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <input
        type="text"
        id="register-username" // Added id
        name="regusername" // Added name
        placeholder="Username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
        className="register-input" // Add class for styling
      />
      <input
        type="password"
        id="register-password" // Added id
        name="regpassword" // Added name
        placeholder="Password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        className="register-input" // Add class for styling
      />
      <button onClick={handleSignup} className="register-button">Register</button> {/* Add class for styling */}
      <p>
        Already have an account? <Link to="/login" className="login-link">Login</Link>
      </p>
      {/* Add a link to home if user is not logged in or registered */}
      <p>
        <Link to="/" className="home-link">Go to Home</Link>
      </p>
    </div>
  );
}

export default Register;