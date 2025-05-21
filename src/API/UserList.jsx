// import React, { useEffect, useState } from 'react';

// function UserList() {
//   const [users, setUsers] = useState([]);

//   // Get API call on component mount
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//       .catch(err => console.error('Error:', err));
//   }, []);

//   return (
//     <div>
//       <h2>Users:</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name} ({user.email}) ({user.username}) ({user.address.city})</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;
import { useEffect, useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error('Error:', err));
    }, []);

    return (
        <div style={{ background: "#f4f6fb", minHeight: "100vh", padding: "30px" }}>
            <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px", fontFamily: "Segoe UI, sans-serif" }}>
                My User Data
            </h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
                justifyContent: "center"
            }}>
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                            padding: "20px",
                            width: "240px",
                            textAlign: "center",
                            transition: "transform 0.2s",
                        }}
                    >
                        <img
                            src={user.image}
                            alt={user.title}
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "contain",
                                marginBottom: "15px",
                                borderRadius: "8px",
                                background: "#f9f9f9"
                            }}
                        />
                        <h5 style={{ color: "#007bff", fontSize: "1.1rem", margin: "10px 0 6px" }}>
                            Name: {user.title}
                        </h5>
                        <p style={{ color: "#28a745", fontWeight: "bold", margin: "0 0 8px" }}>
                            ₹{user.price}
                        </p>
                        <p style={{ color: "#555", fontSize: "0.95rem", margin: 0 }}>
                            Category: {user.category}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;