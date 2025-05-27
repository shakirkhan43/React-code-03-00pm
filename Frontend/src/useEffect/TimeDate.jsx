import React, { useEffect, useState } from 'react';

function TimeDate() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const today = new Date();
    setDate(today.toDateString());

    // Time update karne ke liye har second me interval
    const timer = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000);

    // Cleanup to avoid memory leak
    return () => clearInterval(timer);
  }, []);

  // setInterval(function() {
  //   console.log("Hello, this will print every 2 seconds!");
  // }, 2000); // 2000 ms = 2 seconds
  

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
      <h2 style={{ fontSize: '1.5rem' }}>Current Time: {time}</h2>
    </div>
  );
}

export default TimeDate;
