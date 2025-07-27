import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Encuentra estilos y marcas"
              className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-medium text-center mb-12">
          Elige una opción
        </h2>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="relative overflow-hidden group cursor-pointer">
            <div className="aspect-[4/5] relative">
              <Image
                src="/placeholder.svg?height=600&width=480"
                alt="Moda para mujer"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold tracking-wider">
                  MODA PARA MUJER
                </h3>
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden group cursor-pointer">
            <Link href="/hombre">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://acdn-us.mitiendanube.com/stores/002/855/768/products/o7uibbkyfpwztm6yqnm-7fc346744d6e4a483a17418779671263-480-0.jpg"
                  alt="Moda para hombre"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold tracking-wider">
                    MODA PARA HOMBRE
                  </h3>
                </div>
              </div>
            </Link>
          </Card>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                  <ShoppingBag className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold">
                  CÓMO REALIZAR UNA COMPRA
                </h3>
              </div>
              <p className="text-gray-600">Tu guía para hacer pedidos</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">PREGUNTAS FRECUENTES</h3>
              </div>
              <p className="text-gray-600">¡Respondemos tus preguntas!</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 rounded border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">¿NECESITAS AYUDA?</h3>
              </div>
              <p className="text-gray-600">
                Contacta a nuestro equipo de Atención al Cliente
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
