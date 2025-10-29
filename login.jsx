import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      localStorage.setItem('username', email);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Please enter valid email and password");
    }
  };

  useEffect(() => {
    if (localStorage.getItem('username')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <h3 style={{ textAlign: 'center', marginTop: 20 }}>Login</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 320,
          margin: '20px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }}
      >
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
