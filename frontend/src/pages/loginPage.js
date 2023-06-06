import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4008/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("Unauthorized User");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />
  }
  
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)} />
      <input type="password"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)} />
      <button>Login</button>
    </form>
  );
}