/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoBagRemove } from "react-icons/io5";
import EmptyCartImage from "../assets/About/empty.png";
import { Link, useNavigate } from "react-router-dom";

const WishlistPage = ({ whishItems, addToCart, removeFromWhish }) => {
  const [items, setItems] = useState(whishItems);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setShowLoginAlert(true);
    }
  }, []);

  const handleLoginRedirect = () => {
    setShowLoginAlert(false);
    navigate("/login");
  };

  const moveToCart = (index) => {
    const item = items[index];
    addToCart(item);
    removeFromWhish(item.id);
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    removeFromWhish(id);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const moveAllToCart = () => {
    items.forEach((item) => addToCart(item));
    setItems([]);
    items.forEach((item) => removeFromWhish(item.id));
  };

  const formatQuantity = (item) => {
    // console.log("Formatting quantity for item:", item);
    // console.log(`Item Quantity: ${item.quantity}, Unit: ${item.unit}`); // Debugging line
    if (item.unit === "g") {
      return `${item.quantity}`;
    } else if (item.unit === "kg") {
      return `${item.quantity}kg`;
    } else if (item.unit === "liter") {
      return `${item.quantity} liters`;
    } else if (item.unit === "pieces") {
      return `${item.quantity} piece${item.quantity > 1 ? "s" : ""}`;
    }
    return `${item.quantity}`;
  };

  return (
    <>
      {showLoginAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Login Required</h2>
            <p className="mb-6">Please log in to access your wishlist.</p>
            <button
              onClick={handleLoginRedirect}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}

      {items.length ? (
        <div className="bg-rose-300 p-4 px-10 shadow-sm mt-[110px] rounded-tr-[80px] rounded-bl-[50px] text-left">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            YOUR WISHLIST HERE!!
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg mt-2">
            <Link to="/" className="cursor-pointer">
              HOME
            </Link>{" "}
            /{" "}
            <Link to="/MerchandisePage" className="cursor-pointer">
              PRODUCTS
            </Link>{" "}
            / YOUR WISHLIST
          </p>
        </div>
      ) : null}

      <div className="container mx-auto mt-20 p-4 sm:p-6 lg:p-8">
        {items.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-4xl font-bold mb-6">Your Wishlist</h2>
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="mx-auto mb-4 w-1/3"
            />
            <p>Your Wishlist is empty.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-6">
              Your Wishlist
            </h2>
            <div className="bg-rose-50 rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">
                  You have {items.length} items.
                </p>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl hover:bg-green-600 transition duration-200"
                  onClick={moveAllToCart}
                >
                  Move All to Cart
                </button>
              </div>
              <table className="min-w-full bg-white border rounded-lg shadow table-auto">
                <thead className="bg-rose-200">
                  <tr>
                    <th className="py-4 px-6 text-left text-lg font-semibold text-gray-800">
                      Product
                    </th>
                    <th className="py-4 px-6 text-center text-lg font-semibold text-gray-800 hidden sm:table-cell md:table-cell">
                      Price
                    </th>
                    <th className="py-4 px-6 text-center text-lg font-semibold text-gray-800 hidden sm:table-cell md:table-cell">
                      Quantity
                    </th>
                    <th className="py-4 px-6 text-right text-lg font-semibold text-gray-800">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id} className="hover:bg-rose-100">
                      <td className="py-4 px-6 flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 sm:w-20 sm:h-20 lg:w-20 lg:h-20 rounded-md"
                        />
                        <span className="text-sm sm:text-base font-medium">
                          {item.title}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-700 font-medium hidden sm:table-cell md:table-cell">
                        ₹{item.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-700 font-medium hidden sm:table-cell md:table-cell">
                        {formatQuantity(item)}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-x-2 sm:space-y-0">
                          <button
                            className="w-full sm:w-auto bg-green-500 text-white px-4 py-1 rounded transition duration-200 hover:bg-green-600"
                            onClick={() => moveToCart(index)}
                          >
                            Move to Cart
                          </button>
                          <button
                            className="w-full sm:w-auto  text-red-600 hover:text-red-800"
                            onClick={() => removeItem(item.id)}
                          >
                            <IoBagRemove size={25} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WishlistPage;
