export const products = [
  "iPhone 15",
  "MacBook Pro",
  "iPad Pro",
  "Apple Watch Ultra",
];

export function listProducts() {
  console.log("Lista de productos disponibles:");
  products.forEach((product) => {
    console.log(product);
  });
}
