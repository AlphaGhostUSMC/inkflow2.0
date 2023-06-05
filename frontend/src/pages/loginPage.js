import { Form } from "react-router-dom";

export default function LoginPage() {
  return (
    <form className="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}