"use client";

import Image from "next/image";
import { Heart, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

import { useShallow } from "zustand/shallow";
import { useCart } from "@/store/cart.store";
import { Producto } from "@/app/hombre/page";

export const CartComponent = () => {
  const { count, cart, addCart, removeCart } = useCart(
    useShallow((state) => ({
      count: state.count,
      cart: state.cart,
      addCart: state.addCart,
      removeCart: state.removeCart,
    })),
  );

  const handleRemove = (id: number) => {
    removeCart(id);
  };

  const totalItems = count;
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-6">
      {/* Header with tax info */}
      <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-600">
        <span>Los impuestos aduaneros están incluidos.</span>
        <Info className="w-4 h-4" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              NO HAY PRODUCTOS
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="border-b pb-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={
                        item.image || "/placeholder.svg?height=200&width=150"
                      }
                      alt={item.title}
                      width={150}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          ID de ENTAZO: {item.id}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-1"
                        onClick={() => handleRemove(item.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="mb-4">
                      <Badge variant="secondary" className="text-xs">
                        Última pieza
                      </Badge>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-500 line-through">
                          ${item.price}
                        </span>
                      </div>
                    </div>

                    {/* Size and Quantity */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Talla
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{"-"}</span>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-sm underline"
                          >
                            Cambiar
                          </Button>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Cantidad
                        </label>
                        <Select defaultValue={item.quantity.toString()}>
                          <SelectTrigger className="w-16">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3].map((q) => (
                              <SelectItem key={q} value={q.toString()}>
                                {q}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Move to Wishlist */}
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-sm flex items-center gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      Mover a la lista de deseos
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Resumen</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Cantidad</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span>Entrega</span>
                  <span>$24.00</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <div className="text-right">
                    <div>${totalPrice.toFixed(2)}</div>
                    <div className="text-xs text-gray-500 font-normal">
                      Impuestos aduaneros incluidos
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full mb-4" size="lg">
                Continuar
              </Button>

              {/* Promotion Banner */}
              <div className="bg-gray-900 text-white p-4 rounded-lg">
                <div className="font-semibold mb-2">-20% EXTRA</div>
                <p className="text-sm mb-2">
                  Gasta más de USD 145 en piezas clave y obtén -20% al finalizar
                  la compra.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-xs text-white underline"
                >
                  Aplican términos y condiciones
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
