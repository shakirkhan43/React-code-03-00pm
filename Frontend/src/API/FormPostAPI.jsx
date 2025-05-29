import React, { useState } from "react";

function FormPostAPI() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert("Data POST API se bheja gaya ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
      });
    } catch (error) {
      console.error("❌ POST API error:", error);
    }
  };

  return (
    <div
      style={{
        padding: "32px",
        maxWidth: "420px",
        margin: "110px auto",
        border: "none",
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "28px", color: "#2d3748", fontWeight: 700 }}>
        📨 Simple POST API Form
      </h2>
      <form onSubmit={handleSubmit}>
        <label style={{ fontWeight: 500, color: "#444" }}>Name</label>
        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 18px 0",
            border: "1.5px solid #a0aec0",
            borderRadius: "6px",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s",
          }}
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label style={{ fontWeight: 500, color: "#444" }}>Email</label>
        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 18px 0",
            border: "1.5px solid #a0aec0",
            borderRadius: "6px",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s",
          }}
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={{ fontWeight: 500, color: "#444" }}>Phone</label>
        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 18px 0",
            border: "1.5px solid #a0aec0",
            borderRadius: "6px",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s",
          }}
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label style={{ fontWeight: 500, color: "#444" }}>City</label>
        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 24px 0",
            border: "1.5px solid #a0aec0",
            borderRadius: "6px",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s",
          }}
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg, #667eea 0%, #5a67d8 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
            marginTop: "8px",
            boxShadow: "0 2px 8px rgba(102,126,234,0.10)",
          }}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default FormPostAPI;