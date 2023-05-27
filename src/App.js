import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './App.css';
// import Login from './Login';
// import Signup from './Signup';

class App extends React.Component {
  handleLogin = () => {
    // Perform login logic here
    // For example, you can show a success message or navigate to a dashboard page
    console.log('Login button clicked');
  }

  handleSignup = () => {
    // Perform sign up logic here
    // For example, you can show a success message or navigate to a profile setup page
    console.log('Signup button clicked');
  }
  render() {
    return (
      <div className="App">
        <h1>SapphireCoast Beach Finder</h1>
        <div className="flag-buttons">
          {/* <Link to="./screens/Brunei.js"> */}
            <button className="flag-button">
              <img src={require("./assets/flag2.png")} alt="Brunei" />
              <span>Brunei</span>
            </button>
          {/* </Link> */}
          {/* <Link to="./screens/Brunei.js"> */}
          <button className="flag-button">
              <img src={require("./assets/flag1.png")} alt="Canada" />
              <span>Canada</span>
            </button>
          {/* </Link> */}
          {/* <Link to="./screens/Brunei.js"> */}
          <button className="flag-button">
              <img src={require("./assets/flag3.png")} alt="Thailand" />
              <span>Thailand</span>
            </button>
          {/* </Link> */}
          {/* Add more flag buttons for other countries */}
        </div>
        <div className="auth-section">
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleSignup}>Sign up</button>
        </div>
      </div>
    );
  }
}

export default App;
