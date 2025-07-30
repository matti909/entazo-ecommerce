"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import productos from "../../productos.json";
import { useCart } from "@/store/cart.store";
import { toast } from "sonner";
import { useState } from "react";

export type Producto = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
};

export const ManComponent = () => {
  const addCart = useCart((state) => state.addCart);
  const cart = useCart((state) => state.cart);

  const [clicked, setClicked] = useState(false);

  const handleClick = (producto: Producto) => {
    addCart({
      id: producto.id,
      title: producto.titulo,
      price: producto.precio,
      quantity: 1,
      image: producto.imagen,
    });

    toast("Se agregó un producto al carrito", {
      description: "Producto Agregado",
      action: {
        label: "compras",
        onClick: () => console.log("compras"),
      },
    });

    // Activar animación
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // duración de la animación
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
                  <Button
                    className="w-full bg-black text-white text-sm py-2"
                    size="sm"
                    onClick={() => handleClick(producto)}
                  >
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
