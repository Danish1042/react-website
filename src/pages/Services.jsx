// src/pages/Services.jsx
import React from "react";
import ContentSection from "../components/ContentSection";
import NewsSection from "../components/NewsSection";

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 p-2">
          <ContentSection title="Services ">
            <p>Information services goes here...</p>
          </ContentSection>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default Services;
