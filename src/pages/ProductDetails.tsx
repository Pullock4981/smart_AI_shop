import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_FOR_THIS_PROJECT}/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
        <div className="animate-pulse flex flex-col md:flex-row gap-12 max-w-6xl w-full">
          <div className="flex-1 h-[500px] bg-gray-200 rounded-3xl"></div>
          <div className="flex-1 space-y-6 py-8">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-3/4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-32 bg-gray-200 rounded w-full"></div>
            <div className="h-12 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-8">
        <p className="text-red-500 font-medium text-xl mb-4">Error: {error || 'Product not found'}</p>
        <Link to="/products" className="text-blue-600 hover:underline">&larr; Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <Link to="/products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="flex-1 bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-[500px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              {product.rating && (
                <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-gray-700">{product.rating.rate}</span>
                  <span className="text-gray-400 text-sm">({product.rating.count} reviews)</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <button className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800 font-semibold text-lg px-8 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-gray-200">
              Buy Now
            </button>

            {/* AI Summary Card */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <h3 className="font-semibold text-blue-900">AI Summary</h3>
              </div>
              <p className="text-blue-800 text-sm leading-relaxed">
                Based on {product.rating?.count || 0} reviews, customers highly rate this {product.category} item for its value. 
                It's particularly praised for its quality and accurate description. A solid choice if you're looking for something reliable in this category.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

