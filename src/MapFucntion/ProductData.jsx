const products = [
  { id: 1, title: 'Mobile', price: 100 },
  { id: 2, title: 'Laptop', price: 500 },
  { id: 3, title: 'Tablet', price: 300 },
  { id: 4, title: 'Headphone', price: 50 },
  { id: 5, title: 'Smartwatch', price: 200 },
  { id: 6, title: 'Charger', price: 20 },
];
 
function ProductData() {
  return (


// Destructuring
    <div>
      {products.map(({ id, title, price }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>₹{price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductData;