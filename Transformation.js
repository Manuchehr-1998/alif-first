function transformArrayToString(products) {
  if (products.length === 0) return "";

  let result = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const productString = `${product.name} (цена: $${product.price.toFixed(
      2
    )}, количество: ${product.quantity})`;

    // if (i === products.length - 1) {
    //   result += productString;
    // } else {
    //   result += productString + ",";
    // }
  }
  return result;
}

const products = [
  { name: "Laptop", price: 999.99, quantity: 3 },
  { name: "Phone", price: 499.99, quantity: 10 },
  { name: "Tablet", price: 299.99, quantity: 5 },
  { name: "Tablet", price: 299.99, quantity: 5 },
  { name: "Tablet", price: 299.99, quantity: 5 },
];

console.log(transformArrayToString(products));
