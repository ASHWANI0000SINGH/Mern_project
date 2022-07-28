import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();
  const auth = localStorage.getItem("user");

  useEffect(() => {
    if (auth) {
      naviagte("/");
    }
  }, []);

  const submitData = async () => {
    console.log(name, email, password);
    let response = await fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: [["Content-Type", "application/json"]],
    });
    console.log(response);
    response = await response.json();
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response));

    naviagte("/login");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input onClick={submitData} type="submit" value="Submit" />
    </div>
  );
};

export default SignUp;
