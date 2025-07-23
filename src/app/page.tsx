// app/page.tsx
import ProductCard from './components/ProductCard';

import { products } from './data/products';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
