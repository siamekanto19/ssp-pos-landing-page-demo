import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold tracking-tight">
              <Image src="/logo_no_bg.png" width={50} height={50} alt="Logo" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#products"
              className="text-gray-700 hover:text-[rgb(255,138,5)] transition-colors text-lg font-medium"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-[rgb(255,138,5)] transition-colors text-lg font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[rgb(255,138,5)] transition-colors text-lg font-medium"
            >
              Contact
            </a>
            <Button
              className="text-white px-10 py-6 rounded-full text-base font-semibold transition-all hover:scale-105 transform"
              style={{ backgroundColor: "rgb(255, 138, 5)" }}
            >
              Get Started
            </Button>
          </div>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100">
          <div className="px-8 py-6 space-y-6">
            <a
              href="#products"
              className="block text-gray-700 hover:text-[rgb(255,138,5)] text-lg font-medium"
            >
              Products
            </a>
            <a
              href="#features"
              className="block text-gray-700 hover:text-[rgb(255,138,5)] text-lg font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-[rgb(255,138,5)] text-lg font-medium"
            >
              Contact
            </a>
            <Button
              className="w-full text-white py-6 px-8 rounded-2xl text-lg font-semibold mt-6"
              style={{ backgroundColor: "rgb(255, 138, 5)" }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
