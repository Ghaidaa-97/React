import { useState } from "react";
import UseInfo from "./Info";



const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {message,handleLogin} = UseInfo(email , pass);

    // console.log({status});


    return (
        <div class="container" >
                <div class="mb-3 w-50">
                    <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                </div>
                <div class="mb-3 w-50">
                    <input type="password" class="form-control" onChange={(e) => setPass(e.target.value)} placeholder="password"></input>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button>

            {message}



        </div >
    );
}

export default Login;