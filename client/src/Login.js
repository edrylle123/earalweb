import React, {useState} from "react";
import axios from "axios"
import "../../App.css";

export default function Login() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("")

    const register = () => {
        axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    const login = () => {
        axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message){
                setLoginStatus(respose.data.message)
            } else {
                setLoginStatus(respose.data[0].username)
                
            }
        });
    };

  return (
      <div>
         <div>
             <h1>Registation</h1>
             <label>Username</label>
             <input 
             type="text"
             onchange={(e) => {
                 setUsernameReg(e.target.value);
             }}
             
             />
             <label>Password</label>
             <input 
             type="text"
             onChange={(e) => {
                 setPasswordReg(e.target.value);
             }}
             />
             <button onClick={register}>Register</button>
             
         </div>


         <div>
             <h1>Login</h1>
             <input type="text" placeholder="Username..." 
             onchange={(e) => {
                setUsername(e.target.value);
            }}/>
             <input type="text" placeholder="Password..."
             onchange={(e) => {
                setPassword(e.target.value);
            }}/>
             <button onClick={login}>Login </button>
         </div>
         <h1>{loginStatus}</h1>
      </div>
  )
}