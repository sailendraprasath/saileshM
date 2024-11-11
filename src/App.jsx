import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./pages/Fotter"; // Import the Footer component
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage"; // Import CheckoutPage
import Home from "./pages/Home";
import WhishlistPage from "./pages/WhislistPage";
import Merchandise from "./pages/Merchandise";
import CardShow from "./pages/CardShow";
import Login from "./pages/Loginpage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [whishItems, setWhisItems] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const simulateLoading = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    simulateLoading();
  }, []);

  const addToWhish = (item) => {
    setWhisItems((prevItems) => {
      const existingItem = prevItems.find(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((wishlistItem) =>
          wishlistItem.id === item.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + item.quantity,
              }
            : wishlistItem
        );
      }

      return [
        ...prevItems,
        {
          ...item,
          quantity: item.quantity,
        },
      ];
    });
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...item,
        quantity: item.quantity,
        total: item.price,
      },
    ]);
  };

  const removeFromWhish = (itemId) => {
    setWhisItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const LoadingIndicator = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      <style>
        {`
          .loader {
            border: 8px solid rgba(255, 255, 255, 0.2);
            border-left: 8px solid #ffffff;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );

  const LocationBasedNavbar = () => {
    const location = useLocation();
    const hideNavbarOnPaths = ["/login", "/register"];
    return !hideNavbarOnPaths.includes(location.pathname) ? (
      <Navbar cartCount={cartItems.length} whishCount={whishItems.length} />
    ) : null;
  };

  return (
    <Router>
      <LocationBasedNavbar />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/MerchandisePage"
              element={
                <Merchandise addToCart={addToCart} addToWhish={addToWhish} />
              }
            />
            <Route path="/Aboutpage" element={<AboutPage />} />
            <Route
              path="/card/:id"
              element={
                <CardShow addToCart={addToCart} addToWhish={addToWhish} />
              }
            />
            <Route path="/Contactpage" element={<ContactPage />} />
            <Route
              path="/Cartpage"
              element={<CartPage cartItems={cartItems} />}
            />
            <Route
              path="/Whishlistpage"
              element={
                <WhishlistPage
                  whishItems={whishItems}
                  removeFromWhish={removeFromWhish}
                  addToCart={addToCart}
                />
              }
            />
            {/* Add the CheckoutPage route here */}
            <Route
              path="/checkout"
              element={<CheckoutPage />}
              // Optional: Pass cartItems if needed using state
            />
          </Routes>
          <FooterWrapper /> {/* Include the Footer conditionally */}
        </>
      )}
    </Router>
  );
};

// Create a separate component to handle Footer logic
const FooterWrapper = () => {
  const location = useLocation();
  const hideFooterOnPaths = ["/login", "/register"];
  const showFooter = !hideFooterOnPaths.includes(location.pathname);

  return showFooter ? <Footer /> : null; // Render Footer conditionally
};

export default App;
