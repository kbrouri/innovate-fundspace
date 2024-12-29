import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("FR");

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "AR" : "FR");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-heading font-bold text-primary">ACF.org</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors">
              Projets
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              À propos
            </Link>
            <Link to="/submit-project" className="btn-primary">
              Soumettre un projet
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/projects"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              Projets
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              À propos
            </Link>
            <Link to="/submit-project" className="block px-3 py-2 btn-primary text-center mt-4">
              Soumettre un projet
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;