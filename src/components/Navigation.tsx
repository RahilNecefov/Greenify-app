import { Home, BookOpen, Award, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-green-100 px-4 py-2">
      <div className="max-w-lg mx-auto flex justify-around items-center">
        <Link to="/" className={`flex flex-col items-center ${isActive("/") ? "text-green-600" : "text-gray-600"}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/learn" className={`flex flex-col items-center ${isActive("/learn") ? "text-green-600" : "text-gray-600"}`}>
          <BookOpen size={24} />
          <span className="text-xs mt-1">Learn</span>
        </Link>
        <Link to="/progress" className={`flex flex-col items-center ${isActive("/progress") ? "text-green-600" : "text-gray-600"}`}>
          <Award size={24} />
          <span className="text-xs mt-1">Progress</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center ${isActive("/profile") ? "text-green-600" : "text-gray-600"}`}>
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;