import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products({ onAdd }) {
  return (
    <div>
      <section className="container mx-auto my-8 p-10">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      </section>
    </div>
  );
}
