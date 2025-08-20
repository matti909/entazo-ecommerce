import json
import psycopg2
import random

# Configuración de conexión
DB_HOST = "localhost"
DB_PORT = 5432
DB_NAME = "entazo"
DB_USER = "mattidev"
DB_PASSWORD = "secret1234"

# Lista fija de talles posibles
TALLES = ["S", "M", "L", "XL"]

# Leer JSON
with open("productos.json", "r", encoding="utf-8") as f:
    productos = json.load(f)

try:
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    cur = conn.cursor()

    # 🔹 Eliminar tablas previas
    cur.execute("DROP TABLE IF EXISTS sizes CASCADE;")
    cur.execute("DROP TABLE IF EXISTS productos CASCADE;")

    # 🔹 Crear tablas
    cur.execute("""
        CREATE TABLE productos (
            id SERIAL PRIMARY KEY,
            titulo TEXT NOT NULL,
            descripcion TEXT,
            precio NUMERIC(10,2),
            imagen TEXT,
            brand TEXT
        );
    """)
    cur.execute("""
        CREATE TABLE sizes (
            id SERIAL PRIMARY KEY,
            producto_id INT NOT NULL,
            size TEXT NOT NULL,
            FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
        );
    """)

    # 🔹 Insertar datos
    for producto in productos:
        # Insertar producto
        cur.execute("""
            INSERT INTO productos (titulo, descripcion, precio, imagen, brand)
            VALUES (%s, %s, %s, %s, %s)
            RETURNING id;
        """, (
            producto["titulo"],
            producto["descripcion"],
            producto["precio"],
            producto["imagen"],
            producto["brand"]
        ))
        producto_id = cur.fetchone()[0]

        # Asignar tallas aleatorias (al menos 1, máximo 4)
        talles_producto = random.sample(TALLES, random.randint(1, len(TALLES)))
        for size in talles_producto:
            cur.execute("""
                INSERT INTO sizes (producto_id, size)
                VALUES (%s, %s);
            """, (producto_id, size))

    conn.commit()
    print("✅ Datos insertados con talles aleatorios y esquema limpio")

except Exception as e:
    print("❌ Error:", e)

finally:
    if conn:
        cur.close()
        conn.close()

