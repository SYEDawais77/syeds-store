import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home({ onAdd }) {
  return (
    <div className="bg-gray-100">
      {/* Slideshow Banner */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex animate-slide gap-3">
          {/* Original Banners */}
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Banner 1"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Banner 2"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Banner 3"
            className="w-full h-64 object-cover"
          />

          {/* Duplicate Banners */}
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Banner 1"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Banner 2"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Banner 3"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Products Section */}
      <section className="container mx-auto my-8 p-10">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      </section>
    </div>
  );
}
