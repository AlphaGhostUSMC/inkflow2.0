import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4008/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'content-type': 'application/json' }
    });
    if (response.ok) {
      alert('Registered successfully');
    } else {
      alert('Failed to register');
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)} />
      <input type="password"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)} />
      <button>Register</button>
    </form>
  );
}