
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Portfolio</a>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-medium">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-medium">About</button></li>
            <li><button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-primary font-medium">Education</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-primary font-medium">Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary font-medium">Projects</button></li>
            <li><button onClick={() => scrollToSection('certificates')} className="text-gray-700 hover:text-primary font-medium">Certificates</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary font-medium">Contact</button></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col py-4">
            <li className="border-b border-gray-100">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary">Home</button>
            </li>
            <li className="border-b border-gray-100">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary">About</button>
            </li>
            <li className="border-b border-gray-100">
              <button onClick={() => scrollToSection('education')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary">Education</button>
            </li>
            <li className="border-b border-gray-100">
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary">Skills</button>
            </li>
            <li className="border-b border-gray-100">
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary">Projects</button>
            </li>
            <li className="border-b border-gray-100">
              <button onClick={() => scrollToSection('certificates')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary">Certificates</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary">Contact</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
