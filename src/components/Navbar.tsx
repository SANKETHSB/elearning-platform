import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, BookOpen, Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EduHub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Link to="/categories" className="text-gray-600 hover:text-indigo-600">Categories</Link>
            <Link to="/my-courses" className="text-gray-600 hover:text-indigo-600">My Courses</Link>
            <Link to="/login" className="flex items-center text-gray-600 hover:text-indigo-600">
              <User className="h-5 w-5 mr-1" />
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="p-2">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <Link
              to="/categories"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Categories
            </Link>
            <Link
              to="/my-courses"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              My Courses
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}