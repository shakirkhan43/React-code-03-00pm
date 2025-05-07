import React, { useEffect } from 'react';

function PageTitle() {


  useEffect(() => {
    document.title = "Welcome, React Hooks!";
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Title changed using useEffect</h2>
        <p className="text-gray-600">This page's title is changed using the useEffect hook.</p>
      </div>
    </div>
  );
}

export default PageTitle;

