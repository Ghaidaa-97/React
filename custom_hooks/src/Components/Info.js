import { useState } from "react";

const UseInfo = (Email, Password) => {

  const email = useState('ghaida@gmail.com');
  const pass = useState('G123*');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (Email === email && Password === pass) {
      setMessage("you're now logged in");
    }
    else {
      setMessage("Invalid Email or Password");
    }
  }
  return {message, handleLogin };
};

export default UseInfo;