/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoBagRemove } from "react-icons/io5";
import EmptyCartImage from "../assets/About/empty.png";
import { Link, useNavigate } from "react-router-dom";

const CartPage = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);
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

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const formatQuantity = (item) => {
    if (item.unit === "g") {
      return item.quantity.toString().includes("g")
        ? item.quantity
        : `${item.quantity}g`;
    } else if (item.unit === "kg") {
      return `${item.quantity}`;
    } else if (item.unit === "liter") {
      return `${item.quantity} liter`;
    } else if (item.unit === "pieces") {
      return `${item.quantity} piece${item.quantity > 1 ? "s" : ""}`;
    }
    return `${item.quantity}`;
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const handleProceedToCheckout = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Pass the cart items to the checkout page
      navigate("/checkout", { state: { cartItems: items } });
    } else {
      setShowLoginAlert(true);
    }
  };

  return (
    <>
      {showLoginAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Login Required</h2>
            <p className="mb-6">Please log in to access your cart.</p>
            <button
              onClick={handleLoginRedirect}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
      {items.length !== 0 ? (
        <div className="bg-rose-300 p-4 px-10 caret-transparent select-none shadow-sm shadow-black/90 mt-[110px] rounded-tr-[80px] max-sm:rounded-md rounded-bl-[50px] text-left">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            YOUR CART HERE!!
          </h1>
          <p className="text-white flex justify-start space-x-2 text-sm md:text-base lg:text-lg mt-2">
            <Link className="cursor-pointer" to={"/"}>
              HOME
            </Link>
            <Link className="cursor-pointer" to={"/MerchandisePage"}>
              / PRODUCTS
            </Link>
            <span>/ YOUR CART</span>
          </p>
        </div>
      ) : null}
      <div className="container mx-auto p-4 mt-[150px] sm:p-6 lg:p-8 font-welcome">
        {items.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-4xl font-bold text-center font-welcome mb-6">
              Your Cart
            </h2>
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="mx-auto mb-4 w-1/3"
            />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl mt-[-135px] font-bold text-center font-welcome mb-6">
              Your Cart
            </h2>
            <div className="bg-white rounded-lg shadow-md">
              <table className="min-w-full bg-white text-center">
                <thead className="bg-rose-100 text-2xl font-welcome">
                  <tr>
                    <th className="p-4">Product</th>
                    <th className="p-4 hidden md:table-cell">Price</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4 hidden lg:table-cell">Total</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {items.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-rose-50 duration-75 border-b"
                    >
                      <td className="p-4 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 rounded-md mr-4"
                        />
                        <span className="font-medium">{item.title}</span>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        ₹{item.price.toFixed(2)}
                      </td>
                      <td className="p-4">{formatQuantity(item)}</td>
                      <td className="p-4 hidden lg:table-cell">
                        ₹{item.total.toFixed(2)}
                      </td>
                      <td className="p-4 text-red-600 hover:text-red-800">
                        <button onClick={() => removeItem(index)}>
                          <IoBagRemove size={25} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 flex justify-between bg-rose-100 font-semibold">
                <h3 className="text-xl">Grand Total:</h3>
                <span className="text-xl">₹{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="p-4 bg-rose-50 text-center">
                <button
                  onClick={handleProceedToCheckout}
                  className="bg-green-500 rounded-tr-2xl rounded-bl-2xl text-white px-4 py-2 hover:bg-green-600"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
