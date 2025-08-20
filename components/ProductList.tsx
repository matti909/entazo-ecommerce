import { getProducts } from "@/lib/users";
import { Card, CardContent } from "./ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { ButtonAddToCart } from "./ButtonAddToCart";
import { Producto } from "@/types/Products";

export const ProductList = async () => {
  const productos = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productos.map((producto: Producto) => (
        <Card
          key={producto.id}
          className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300 bg-white"
        >
          <CardContent className="p-0">
            {/* Contenedor de imagen con heart icon */}
            <div className="relative overflow-hidden bg-gray-50">
              <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
              </button>

              <div className="aspect-[3/4] relative">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
            </div>

            {/* Información del producto */}
            <div className="p-4 space-y-2">
              {/* Marca */}
              {producto.titulo && (
                <p className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                  {producto.titulo}
                </p>
              )}

              {/* Título/Descripción */}
              <h3 className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {producto.descripcion || producto.titulo}
              </h3>

              {/* Precios */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-sm font-medium text-gray-900">
                  ${producto.precio.toLocaleString()}
                </span>
              </div>

              {/* Botón de agregar al carrito - aparece en hover */}
              <div className="pt-3">
                <ButtonAddToCart producto={producto} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
