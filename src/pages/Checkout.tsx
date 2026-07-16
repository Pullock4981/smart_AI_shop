import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockCart = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Premium Ceramic Coffee Mug',
    price: 24.00,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop',
  }
];

export const Checkout = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  const subtotal = mockCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    // In a real app, you would send data to the backend here
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-20">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Placed!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Thank you for your purchase. We have received your order and will send you a confirmation email shortly.
          </p>
          <Link to="/products" className="inline-block w-full py-4 px-6 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Continue Shopping
          </Link>
          <Link to="/dashboard" className="inline-block w-full mt-3 py-4 px-6 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors">
            View Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-500">Complete your order securely.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* Left Column: Forms */}
          <div className="flex-1 order-2 lg:order-1">
            <form onSubmit={handlePlaceOrder} className="space-y-10" id="checkout-form">
              
              {/* Shipping Information */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">1</div>
                  Shipping Information
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input required type="text" id="fullName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                    <textarea required id="address" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="123 Main St, Apt 4B, New York, NY 10001"></textarea>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">2</div>
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  {/* COD */}
                  <label className="relative flex cursor-pointer rounded-xl border bg-blue-50/50 border-blue-200 p-4 shadow-sm focus:outline-none">
                    <input type="radio" name="payment_method" value="cod" className="sr-only" defaultChecked />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-blue-900">Cash on Delivery</span>
                        <span className="mt-1 flex items-center text-sm text-blue-700">Pay securely upon receiving your package.</span>
                      </span>
                    </span>
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </label>

                  {/* Credit Card (Disabled) */}
                  <label className="relative flex cursor-not-allowed rounded-xl border border-gray-200 p-4 bg-gray-50 opacity-60">
                    <input type="radio" name="payment_method" value="card" className="sr-only" disabled />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-500">Credit Card</span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">Currently unavailable.</span>
                      </span>
                    </span>
                    <div className="flex gap-2">
                      <svg className="w-8 h-6 text-gray-400" fill="currentColor" viewBox="0 0 36 24"><rect width="36" height="24" rx="4"/><path fill="#fff" d="M4 14h6v2H4zM4 18h10v2H4z"/><path fill="#fff" opacity=".5" d="M4 6h28v4H4z"/></svg>
                    </div>
                  </label>
                </div>
              </div>

              {/* Mobile Place Order Button */}
              <div className="lg:hidden">
                <button type="submit" form="checkout-form" className="w-full py-4 px-8 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-gray-200">
                  Place Order &bull; ${total.toFixed(2)}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-[450px] shrink-0 order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="divide-y divide-gray-100 mb-6">
                {mockCart.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 shrink-0 border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-sm font-medium text-gray-900 leading-tight mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">Qty: {item.quantity}</p>
                      <p className="text-sm font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-black text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <button type="submit" form="checkout-form" className="hidden lg:block w-full py-4 px-8 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-gray-200">
                Place Order
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

