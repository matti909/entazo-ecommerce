export type ProductoBase = {
  id: number;
  titulo: string;
  descripcion: string | null;
  precio: number;
  imagen: string;
  brand: string | null;
};

export type Producto = ProductoBase & {
  sizes?: string[];
};
