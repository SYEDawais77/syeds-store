export default function Cart({ cartItems, onRemove }) {
  // Calculate total price
  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 pb-24 ">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">PKR {item.price.toFixed(2)}</p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex justify-between mt-6">
            <h3 className="text-lg font-bold">Total:</h3>
            <p className="text-lg font-bold">PKR {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
