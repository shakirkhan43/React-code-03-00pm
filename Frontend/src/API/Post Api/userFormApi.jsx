import  { useState } from 'react';

function UserFormApi() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log('User added:', data);
        alert('User added successfully!');
        setFormData({ name: '', email: '', phone: '', city: '' }); // reset input fields
      })
      .catch(err => {
        console.error('Error:', err);
        alert('Failed to add user.');
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city} 
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <button style={{ backgroundColor: 'blue', color: 'white' , padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserFormApi;