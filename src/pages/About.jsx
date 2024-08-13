// src/pages/About.jsx
import React from 'react';
import ContentSection from '../components/ContentSection';
import NewsSection from '../components/NewsSection';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 p-2">
          <ContentSection title="About Us">
            <p>Information about us goes here...</p>
          </ContentSection>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default About;
