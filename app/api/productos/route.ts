import { NextResponse } from "next/server";
import productos from "../../../productos.json";

export async function GET() {
  return NextResponse.json(productos);
}
