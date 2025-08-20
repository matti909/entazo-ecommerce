"use server";

import { Producto } from "../types/Products";
import { db } from "@/db/drizzle";
import { productos } from "@/db/schema";

export async function getProducts(): Promise<Producto[]> {
  try {
    const allProducts = await db.select().from(productos);
    return allProducts;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
