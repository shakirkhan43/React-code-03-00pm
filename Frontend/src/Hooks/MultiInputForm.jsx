import React, { useState } from 'react';

function MultiInputForm() {
  //  Multiple inputs ko ek hi object me store kar rahe
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔁 Common change handler sabhi inputs ke liye
  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log("Field Name:", name);   // e.g. 'email'
    console.log("Field Value:", value); // e.g. 'abc@gmail.com'

    // Object spread operator se value update kar rahe
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 🔘 Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">🧾 Multi-Input Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label className="block mb-2 text-gray-700 font-medium">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Email Field */}
        <label className="block mb-2 text-gray-700 font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Password Field */}
        <label className="block mb-2 text-gray-700 font-medium">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 text-gray-600">
        <h4 className="font-medium">Live Preview:</h4>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Password:</strong> {formData.password}</p>
      </div>
    </div>
  );
}

export default MultiInputForm;
