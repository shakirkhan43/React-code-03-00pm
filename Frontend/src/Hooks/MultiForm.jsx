import React, { useState } from 'react';

function MultiForm() {
  //  useState me ek object jisme saare inputs store honge
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: ""
  });




  //  Har input ke change hone par ye function chalega
  const handleChange = (event) => {
    const { name, value } = event.target; // name = input ka name, value = jo user type kar raha hai

    //  Pura purana data copy karo, sirf jis field me change hua use update karo
    setFormData({
      ...formData,
      [name]: value
    });

    console.log(`${name} updated to:`, value); // Console me live value dekhne ke liye
  };

  //  Form submit hone par
  const handleSubmit = (e) => {
    e.preventDefault(); // Form reload hone se rokta hai
    console.log("Submitted Form Data:", formData);
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nContact: ${formData.contact}\nCity: ${formData.city}`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Simple Multi-Input Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        /><br /><br />

        {/* Email Field */}
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        /><br /><br />

        {/* Contact Field */}
        <label>Contact:</label><br />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your contact number"
        /><br /><br />

        {/* City Field */}
        <label>City:</label><br />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
        /><br /><br />

        <button  
         className='bg-zinc-900 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-200' 

        type="submit">Submit</button>
      </form>

      {/*  Live preview below */}
      <div style={{ marginTop: "20px" }}>
        <h4>Live Preview:</h4>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Contact:</strong> {formData.contact}</p>
        <p><strong>City:</strong> {formData.city}</p>
      </div>
    </div>
  );
}

export default MultiForm;





//   const user = { name: "Shakir", age: 24 , city : "indore"};
// const updatedUser = { ...user,  };
// Output:
// console.log(updatedUser);
// { name: "Shakir", age: 24, city: "Indore" }

//   const fruits = ["apple", "banana","Orange"];
// const newFruits = [...fruits,]
// console.log(newFruits);