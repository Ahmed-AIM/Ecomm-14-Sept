import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation
import './Login.css'; // Import the CSS file for styling

const userdata = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  // Add more users as needed
];

function Login({ setUsername }) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  
  const handleLogin = () => {
    const user = userdata.find(
      (u) => u.username === inputUsername && u.password === inputPassword
    );
    if (user) {
      setUsername(user.username); // Set username on successful login
      navigate("/"); // Redirect to home page
      console.log(`logged in ${user.username}`);  // console log to verify successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container"> {/* Add a container for styling */}
      <h2 className="login-title">Login</h2> {/* Add a title */}
      <input
        type="text"
        id="login-username" // Added id
        name="logusername" // Added name
        placeholder="Username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
        className="login-input" // Add class for styling
      />
      <input
        type="password"
        id="login-password" // Added id
        name="logpassword" // Added name
        placeholder="Password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        className="login-input" // Add class for styling
      />
      <button onClick={handleLogin} className="login-button">Login</button> {/* Add class for styling */}
      Don't have an account? <Link to="/register" className="login-link">Sign up</Link> {/* Updated link to Register */}
      {/* Add a link to home if user is not logged in */}
      <p>
        <Link to="/" className="home-link">Go to Home</Link>
      </p>
    </div>
  );
}

export default Login;