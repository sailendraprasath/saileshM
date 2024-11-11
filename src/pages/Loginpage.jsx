import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (!storedUsers) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Both email and password are required");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (!foundUser) {
      setErrorMessage("Invalid email or password");
      return;
    }

    localStorage.setItem("userId", foundUser.id);
    setErrorMessage("");
    setSuccessMessage("Login successful! Redirecting to profile...");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-100 p-6">
      <div className="bg-rose-50 p-8 rounded-lg shadow-lg max-w-sm w-full bg-gradient-to-r from-rose-50 to-rose-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-rose-800">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-rose-800">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-b-2 bg-transparent border-rose-300 focus:outline-none text-rose-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-rose-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-b-2 bg-transparent border-rose-300 focus:outline-none text-rose-800"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm mb-4">{successMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-rose-800 mt-4">
          Don&lsquo;t have an account?{" "}
          <a href="/register" className="text-rose-600 hover:text-rose-800">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
