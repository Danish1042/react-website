// src/layouts/News.jsx
import React from 'react';

const News = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">News Item 1</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">News Item 2</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">News Item 3</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">News Item 4</a></li>
      </ul>
    </div>
  );
};

export default News;
