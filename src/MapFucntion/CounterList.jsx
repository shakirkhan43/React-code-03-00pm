import { useState } from "react";

function CounterList() {
  const [counts, setCounts] = useState([0, 0, 0]);

  const increase = (index) => {
    const newCounts = counts.map((count, i) => (i === index ? count + 1 : count));
    setCounts(newCounts);
  };

  const decrease = (index) => {
    const newCounts = counts.map((count, i) => (i === index ? count - 1 : count));
    setCounts(newCounts);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333", fontFamily: "Arial, sans-serif" }}>Counter List</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {counts.map((count, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
              width: "200px",
            }}
          >
            <p style={{ fontSize: "1.2rem", color: "#007bff", fontWeight: "bold" }}>Counter {index + 1}</p>
            <p style={{ fontSize: "1.5rem", color: "#333", margin: "10px 0" }}>{count}</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button
                onClick={() => increase(index)}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Increase
              </button>
              <button
                onClick={() => decrease(index)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Decrease
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CounterList;