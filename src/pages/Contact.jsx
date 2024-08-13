// src/pages/Contact.jsx
import React from "react";
import ContentSection from "../components/ContentSection";
import NewsSection from "../components/NewsSection";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 md:p-2 mb-4 md:mb-0">
          <ContentSection title="Contact Us">
            <ContactForm />
          </ContentSection>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default Contact;
