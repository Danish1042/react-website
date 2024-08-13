// src/components/ContentSection.jsx
import React from 'react';

const ContentSection = ({ title, children }) => {
  return (
    <div className="p-4 rounded shadow bg-gray-900 text-yellow-500">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default ContentSection;
