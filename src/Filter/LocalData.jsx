
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Mobile",
    price: 80000,
  },
  {
    id: 2,
    name: "Samsung Galaxy",
    category: "Mobile",
    price: 50000,
  },
  {
    id: 3,
    name: "Redmi Note 10",
    category: "Mobile",
    price: 15000,
  },
  {
    id: 4,
    name: "Dell Laptop",
    category: "Laptop",
    price: 60000,
  },
];

const LocalData = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter logic
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())||
    item.price.toString().includes(searchTerm)
  );


  const searchItem = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value);
    
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>📱 Product List with Filter</h2>

      {/* 🔎 Input to filter */}
      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={searchItem}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid lightgray",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      />

      {/* 🗂 map ke through filtered data */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "5px solid green",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{fontSize:"30px"}}>{product.name}</h1>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default LocalData;













// 🔹 Breakdown Step-by-Step:
// 1. item.name
// Har product ka naam.

// Example: "iPhone 14", "Samsung Galaxy" etc.

// 2. item.name.toLowerCase()
// Product name ko small letters (lowercase) me convert karta hai.

// Kyun? Taaki comparison case-insensitive ho jaye.

// Example: "iPhone 14" ➝ "iphone 14"

// 3. searchTerm.toLowerCase()
// User ne input me jo likha hai, usse bhi lowercase me badal diya.

// Example: agar user ne likha "IPHONE" ➝ "iphone"

// 4. includes()
// Ye check karta hai ki kya item.name ke andar searchTerm aata hai ya nahi.

// Agar aata hai ➝ true return karta hai.

// Nahi aata ➝ false return karta hai.




//  Without .toLowerCase() kya hota?
// Agar user ne "phone" likha aur product me "iPhone" likha hai, to dono ka case alag hai (capital/small), aur match nahi hota.

// Isliye .toLowerCase() dono sides pe lagana zaroori hai case-insensitive match ke liye.