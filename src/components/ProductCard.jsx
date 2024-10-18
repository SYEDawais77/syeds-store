export default function ProductCard({ product, onAdd }) {
  const handleClick = (e) => {
    e.preventDefault();
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    };
    // console.log(newProduct);

    onAdd(newProduct);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover"
      />

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

        {/* Product Price */}
        <p className="text-gray-600 mt-2 font-bold">
          PKR {product.price.toFixed(2)}
        </p>

        {/* Product Description */}
        <p className="text-gray-500 mt-2 text-sm">
          {product.description.length > 60
            ? product.description.substring(0, 60) + "..."
            : product.description}
        </p>

        {/* Add to Cart Button */}
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
