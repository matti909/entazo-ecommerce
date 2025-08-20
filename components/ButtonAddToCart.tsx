"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useCart } from "@/store/cart.store";
import type { Producto } from "@/types/Products";

type Props = { producto: Producto };

export function ButtonAddToCart({ producto }: Props) {
  const addCart = useCart((s) => s.addCart);
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(() => {
    const priceNumber =
      typeof producto.precio === "string"
        ? parseFloat(producto.precio)
        : producto.precio;

    addCart({
      id: producto.id,
      title: producto.titulo,
      price: Number.isFinite(priceNumber) ? priceNumber : 0,
      quantity: 1,
      image: producto.imagen ?? "",
    });

    toast("Se agregó un producto al carrito", {
      description: producto.titulo,
      action: {
        label: "Ver carrito",
        onClick: () => console.log("Ir al carrito"),
      },
    });

    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  }, [addCart, producto]);

  return (
    <Button
      type="button"
      className={`w-full bg-black text-white text-sm py-2 transition-transform ${
        clicked ? "scale-[0.98]" : ""
      }`}
      size="sm"
      onClick={handleClick}
    >
      Agregar al carrito
    </Button>
  );
}
