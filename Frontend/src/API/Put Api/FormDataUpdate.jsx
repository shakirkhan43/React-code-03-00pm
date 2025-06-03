// 📦 Required imports
import { useState, useEffect } from "react";
import axios from "axios"; // For making API calls

function FormDataUpdate() {
  // 📌 Initial form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  // 📌 State to store all user data fetched from DB
  const [allData, setAllData] = useState([]);

  // 📌 To check whether form is in edit mode or not
  const [isEditMode, setIsEditMode] = useState(false);

  // 📌 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the field in formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ GET: Fetch all data from backend
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setAllData(res.data); // Set the data to state
    } catch (error) {
      console.error("❌ GET API Error:", error);
    }
  };

  // 🔁 Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // ✅ POST: Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      await axios.post("http://localhost:3000/users", formData);
      alert("✅ Data POST API se bheja gaya");
      setFormData({ name: "", email: "", phone: "", city: "" }); // Reset form
      fetchData(); // Refresh data
    } catch (error) {
      console.error("❌ POST API error:", error);
    }
  };

  // ✅ PUT: Update user by email
  const updateForm = async () => {
    try {
      await axios.put(`http://localhost:3000/users/email/${formData.email}`, {
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
      });
      alert("✅ Data PUT API se update ho gaya");
      setFormData({ name: "", email: "", phone: "", city: "" }); // Reset form
      setIsEditMode(false); // Exit edit mode
      fetchData(); // Refresh data
    } catch (error) {
      console.error("❌ PUT API error:", error);
      alert("❌ Update failed, email not found!");
    }
  };

  // ✅ DELETE: Delete user by email
const handleDelete = async (email) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:3000/users/email/${email}`);
    alert("🗑️ User deleted successfully!");
    fetchData(); // Refresh data
  } catch (error) {
    console.error("❌ DELETE API error:", error);
    alert("❌ Failed to delete user.");
  }
};


  // 🖊️ Fill form for editing
  const handleEdit = (item) => {
    setFormData(item); // Fill data in form
    setIsEditMode(true); // Enable edit mode
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to form
  };

  return (
    <div style={{ padding: "32px", maxWidth: "820px", margin: "50px auto" }}>
      {/* 📝 Form Section */}
      <div
        style={{
          padding: "32px",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          background: "#fff",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "28px", color: "#2d3748", fontWeight: 700 }}>
          📨 {isEditMode ? "Update" : "Submit"} Form
        </h2>

        {/* 🔄 Form */}
        <form onSubmit={handleSubmit}>
          {/* 🔁 Loop over form fields */}
          {["name", "email", "phone", "city"].map((field) => (
            <div key={field}>
              <label style={{ fontWeight: 500, color: "#444" }}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Enter ${field}`}
                value={formData[field]}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "8px 0 18px 0",
                  border: "1.5px solid #a0aec0",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
            </div>
          ))}

          {/* ✅ Show Submit or Update button based on mode */}
          {!isEditMode ? (
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(90deg, #38b2ac 0%, #319795 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Submit Form
            </button>
          ) : (
            <button
              type="button"
              onClick={updateForm}
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
              }}
            >
              Update Form
            </button>
          )}
        </form>
      </div>

      {/* 📊 Table Section */}
      <div
        style={{
          padding: "24px",
          background: "#f7fafc",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "18px" }}>📄 Saved Data</h3>

        {/* 🔁 Show data in table */}
        {allData.length === 0 ? (
          <p style={{ textAlign: "center", color: "#999" }}>No data available</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
              fontSize: "15px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#e2e8f0", color: "#2d3748" }}>
                <th style={{ padding: "10px" }}>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((item, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "10px" }}>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                  <td>
  <button
    onClick={() => handleEdit(item)}
    style={{
      background: "#5a67d8",
      color: "#fff",
      padding: "6px 12px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginRight: "8px",
    }}
  >
    ✏️ Edit
  </button>
  <button
    onClick={() => handleDelete(item.email)}
    style={{
      background: "#e53e3e",
      color: "#fff",
      padding: "6px 12px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    🗑️ Delete
  </button>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default FormDataUpdate;
