// Importa funciones desde los módulos
import { listProducts, products } from "./producto.js";
import { saveFavoriteProduct, getFavoriteProduct } from "./almacenamiento.js";

// Mostrar los productos disponibles
listProducts();

// Guardar un producto favorito en localStorage
saveFavoriteProduct(products[0]); // Ejemplo: Guardar 'iPhone 15'

// Mostrar el producto favorito guardado
getFavoriteProduct();
