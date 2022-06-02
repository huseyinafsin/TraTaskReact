import "./App.css";
import {useState } from "react";
import {useNavigate } from "react-router-dom";
import AuthService from "./services/authService";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn,setIsLoggedIn ] = useState(true)
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
AuthService.login(username, password).then(
      () => {
        setIsLoggedIn(true)
        navigate("/profile");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setIsLoggedIn(false)

      }
    );


  };

  return (
    <div className="login-page">
      <div className="form">
     <h4 style={{color:"red"}}> {isLoggedIn ? "" : "Username or password is wrong"} </h4>
        <form className="login-form" onSubmit={handleLogin}>
                 <input
            type="text"
            autoComplete="off"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            autoComplete="off"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button >login</button>
        </form>
      </div>
    </div>
  );
  }


export default Login;
