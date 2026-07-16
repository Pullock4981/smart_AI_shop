import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // On success, redirect to home
      navigate("/");
    } catch (error: any) {
      console.error("Error signing in with Google:", error);
      alert("Failed to login with Google! Error: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="p-8 bg-gray-900 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h2>
        <p className="text-gray-400 text-center mb-8">
          Welcome back! Please login to your account.
        </p>
        <button 
          onClick={handleGoogleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

