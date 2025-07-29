import { User, Heart, ShoppingBag, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeaderLayout = () => {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              Moda para mujer
            </Link>
            <Link
              href="/hombre"
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              Moda para hombre
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex justify-center md:justify-start md:flex-none">
            <h1 className="text-2xl font-bold tracking-wider">ENTAZO</h1>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Globe className="h-5 w-5" />
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
