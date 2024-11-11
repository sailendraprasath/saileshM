import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !email || !password || !confirmPassword || !phone || !dob) {
      setErrorMessage("All fields are required");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      setErrorMessage("User with this email already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      phone,
      dob,
      cart: [],
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    setDob("");
    setErrorMessage("");
    setSuccessMessage("Registration successful! You can now log in.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-100 p-6">
      <div className="bg-rose-50 p-8 rounded-lg shadow-lg max-w-sm w-full bg-gradient-to-r from-rose-50 to-rose-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-rose-800">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-rose-800">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border-b-2 bg-transparent border-rose-300 focus:outline-none text-rose-800"
            />
          </div>
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
            <label className="block text-rose-800">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border-b-2 bg-transparent border-rose-300 focus:outline-none text-rose-800"
              placeholder="123-456-7890"
            />
          </div>
          <div className="mb-4">
            <label className="block text-rose-800">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
          <div className="mb-4">
            <label className="block text-rose-800">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            Register
          </button>
        </form>
        <p className="text-center text-rose-800 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-rose-600 hover:text-rose-800">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
