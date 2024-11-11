import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  // Calculate total amount considering quantity and price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = isNaN(item.price) ? 0 : item.price; // Check if price is valid
      const quantity = isNaN(item.quantity) ? 1 : item.quantity; // Check if quantity is valid
      return total + price * quantity; // Multiply price and quantity
    }, 0);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-3xl font-bold text-center mb-6">Checkout</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty. Please add items to your cart.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md">
          <table className="min-w-full bg-white text-center">
            <thead className="bg-rose-100 text-2xl">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4 hidden md:table-cell">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4 hidden lg:table-cell">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {cartItems.map((item, index) => {
                const price = isNaN(item.price) ? 0 : item.price; // Validate price
                const quantity = isNaN(item.quantity) ? 1 : item.quantity; // Validate quantity
                const total = price * quantity;
                return (
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
                      ₹{price.toFixed(2)}
                    </td>
                    <td className="p-4">{quantity}</td>
                    <td className="p-4 hidden lg:table-cell">
                      ₹{total.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="p-4 flex justify-between bg-rose-100 font-semibold">
            <h3 className="text-xl">Grand Total:</h3>
            <span className="text-xl">₹{calculateTotal().toFixed(2)}</span>
          </div>
          <div className="p-4 bg-rose-50 text-center">
            <button className="bg-green-500 rounded-tr-2xl rounded-bl-2xl text-white px-4 py-2 hover:bg-green-600">
              Complete Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
