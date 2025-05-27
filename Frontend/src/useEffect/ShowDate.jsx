import React, { useEffect, useState } from 'react';

function ShowDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setDate(today.toDateString());
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      color: '#333'
    }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2rem' }}>Welcome to the Date Viewer</h1>
      <h2 style={{ fontSize: '1.5rem' }}>Today is: {date}</h2>
    </div>
  );
}

export default ShowDate;
