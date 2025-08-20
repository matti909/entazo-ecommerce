import { pgTable, serial, text, numeric, integer } from "drizzle-orm/pg-core";

export const productos = pgTable("productos", {
  id: serial("id").primaryKey(),
  titulo: text("titulo").notNull(),
  descripcion: text("descripcion"),
  precio: numeric("precio", { precision: 10, scale: 2 }),
  imagen: text("imagen"),
  brand: text("brand"),
});

export const sizes = pgTable("sizes", {
  id: serial("id").primaryKey(),
  productoId: integer("producto_id")
    .notNull()
    .references(() => productos.id, { onDelete: "cascade" }),
  size: text("size").notNull(),
});
