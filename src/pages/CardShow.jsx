import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { AllcardsData } from "../data";
import Cards from "../Components/Cards";

// eslint-disable-next-line react/prop-types
const CardShow = ({ addToCart, addToWish }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = location.state;
  const [selectedCategory] = useState("All Products");

  const quantityOptions = [0.5, 1, 1.5, 2, 2.5, 3];

  const [quantity, setQuantity] = useState(1);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [borderWidth, setBorderWidth] = useState(100);

  const handleQuantityChange = (e) => {
    setQuantity(parseFloat(e.target.value));
  };

  const triggerAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setBorderWidth(100);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const checkUserLoggedIn = (action) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setModalAction(action);
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleAddToCart = () => {
    if (!checkUserLoggedIn("cart")) return;

    const item = {
      id: card.id,
      title: card.title,
      image: card.img,
      price: card.price * quantity,
      quantity: quantity,
    };
    addToCart(item);
    triggerAlert(`${quantity} kg of ${card.title} added to cart!`);
  };

  const handleAddToWish = () => {
    if (!checkUserLoggedIn("wishlist")) return;

    const item = {
      id: card.id,
      title: card.title,
      image: card.img,
      price: card.price * quantity,
      quantity: quantity,
    };
    addToWish(item);
    triggerAlert(`${quantity} kg of ${card.title} added to wishlist!`);
  };

  useEffect(() => {
    if (showAlert) {
      const interval = setInterval(() => {
        setBorderWidth((prev) => (prev > 0 ? prev - 1 : 0));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showAlert]);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-24">
      {/* Custom Alert */}
      {showAlert && (
        <div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-rose-100 border text-rose-700 px-4 py-3 rounded"
          role="alert"
          style={{
            borderWidth: `${borderWidth}%`,
            borderColor: "rgb(239 68 68)",
          }}
        >
          <span className="block sm:inline">{alertMessage}</span>
        </div>
      )}

      {/* Modal for login */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Login Required</h2>
            <p className="mb-6">
              You need to log in to add items to your{" "}
              {modalAction === "cart" ? "cart" : "wishlist"}.
            </p>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => {
                  setShowModal(false);
                  navigate("/");
                }}
              >
                Log In
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="md:w-1/2 w-full p-4 sticky top-20">
          <img
            src={card.img}
            alt={card.title}
            className="h-auto w-full object-contain rounded-lg border border-gray-200"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 w-full p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{card.title}</h1>
            <p className="mt-2 text-sm text-gray-600">SKU: 10000067</p>
            <p className="mt-4 text-lg text-gray-700">{card.para}</p>

            {/* Product Rating */}
            <div className="flex items-center mt-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-2 text-gray-600">(25 ratings)</span>
            </div>

            <p className="mt-6 text-2xl font-semibold text-green-600">
              ₹{(card.price * quantity).toFixed(2)}{" "}
              {/* Updated price based on kg */}
            </p>

            {/* Quantity Dropdown (in kg) */}
            <div className="mt-6 flex items-center space-x-4">
              <label className="text-lg font-semibold">Quantity (kg):</label>
              <select
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 rounded-lg p-2 text-lg"
              >
                {quantityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option} kg
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Add to Cart and Wishlist buttons */}
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors w-full md:w-auto flex items-center justify-center space-x-2"
              onClick={handleAddToCart}
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button
              className="bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors w-full md:w-auto flex items-center justify-center space-x-2"
              onClick={handleAddToWish}
            >
              <FaHeart />
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800">Similar Products</h2>
        <div className="overflow-x-auto whitespace-nowrap mt-4">
          <Cards
            addToCart={addToCart}
            addToWish={addToWish}
            selectedCategory={selectedCategory}
            AllcardsData={AllcardsData}
          />
        </div>
      </div>
    </div>
  );
};

export default CardShow;
