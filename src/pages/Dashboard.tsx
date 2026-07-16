import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const recentOrders = [
  { id: 'ORD-12093', date: 'Oct 12, 2023', total: 129.99, status: 'Delivered' },
  { id: 'ORD-12092', date: 'Oct 10, 2023', total: 45.50, status: 'Processing' },
  { id: 'ORD-12091', date: 'Sep 28, 2023', total: 299.00, status: 'Delivered' },
];

export const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.displayName?.split(' ')[0] || 'User'}!
          </h1>
          <p className="text-gray-500">Here is an overview of your account and recent activity.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Profile & Quick Actions */}
          <div className="space-y-8">
            
            {/* Profile Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6 overflow-hidden border-4 border-white shadow-lg">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-blue-600">
                    {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{user?.displayName || 'Guest User'}</h2>
              <p className="text-sm text-gray-500 mb-6">{user?.email || 'No email provided'}</p>
              
              <div className="w-full h-px bg-gray-100 mb-6"></div>
              
              {/* Quick Actions */}
              <div className="w-full flex flex-col gap-3">
                <Link to="/products" className="w-full py-3 px-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors text-sm">
                  Continue Shopping
                </Link>
                <Link to="/checkout" className="w-full py-3 px-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm">
                  Go to Checkout
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full py-3 px-4 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors text-sm mt-2"
                >
                  Logout
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Stats & Recent Orders */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  </div>
                  <h3 className="text-gray-500 font-medium">Orders</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <h3 className="text-gray-500 font-medium">Wishlist</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">5</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="text-gray-500 font-medium">In Cart</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">View All</a>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="pb-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="pb-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="pb-4 text-sm font-medium text-gray-500 uppercase tracking-wider text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 text-sm font-semibold text-gray-900">{order.id}</td>
                        <td className="py-4 text-sm text-gray-500">{order.date}</td>
                        <td className="py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-sm font-bold text-gray-900 text-right">${order.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

