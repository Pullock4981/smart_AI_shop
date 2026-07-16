import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

export const Navbar = () => {
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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">
              Smart<span className="text-blue-600">Shop</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
            <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Link>
            <Link to="/checkout" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Checkout</Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <button 
                onClick={handleLogout}
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
