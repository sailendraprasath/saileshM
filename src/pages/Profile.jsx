import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    favoriteCategories: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const userId = localStorage.getItem("userId");
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = storedUsers.find((u) => u.id === parseInt(userId));

      if (currentUser) {
        setUser(currentUser);
        setFormData({
          name: currentUser.name,
          email: currentUser.email,
          phone: currentUser.phone,
          address: currentUser.address || "",
          dateOfBirth: currentUser.dateOfBirth || "",
          favoriteCategories: currentUser.favoriteCategories || "",
        });
      }
    } catch (error) {
      console.error("Error retrieving user data from localStorage:", error);
    }
  }, []);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    try {
      const updatedUser = { ...user, ...formData };
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = storedUsers.map((u) =>
        u.id === updatedUser.id ? updatedUser : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setUser(updatedUser);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data in localStorage:", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Please Log In</h1>
          <p className="text-gray-600 mb-4">
            You need to log in to view your profile.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md min-h-screen sticky top-0">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Account Settings</h2>
          <ul className="space-y-2">
            <li>
              <button className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                Personal Info
              </button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                Order History
              </button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                Address Book
              </button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                Payment Methods
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <header className="bg-green-600 p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-3xl font-bold">My Profile</h1>
            <div className="flex space-x-4">
              <button className="text-white">Your Account</button>
              <button className="text-white">Help</button>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Profile and Edit Section */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col items-center sm:flex-row sm:items-start">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
                <p className="text-gray-600">
                  Age:{" "}
                  {user.dateOfBirth ? calculateAge(user.dateOfBirth) : "N/A"}
                </p>
                <p className="text-gray-600">
                  Favorite Categories: {user.favoriteCategories || "N/A"}
                </p>
              </div>
            </div>
            <button
              onClick={handleEditClick}
              className="mt-6 w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
            >
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          </div>

          {isEditing && (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Address"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="favoriteCategories"
                    value={formData.favoriteCategories}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Favorite Categories"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSaveClick}
                  className="mt-4 w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Profile;
