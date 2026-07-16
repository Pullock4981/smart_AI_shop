import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from '../shared/ProductCard';

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_FOR_THIS_PROJECT}?limit=8`);
        setProducts(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-500 max-w-2xl">Handpicked essentials for your modern lifestyle.</p>
          </div>
          <a href="/products" className="hidden sm:inline-flex text-blue-600 font-medium hover:text-blue-800 transition-colors">
            View all products &rarr;
          </a>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-[400px]"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500 font-medium">Error loading products: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center sm:hidden">
          <a href="/products" className="inline-flex text-blue-600 font-medium hover:text-blue-800 transition-colors">
            View all products &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
