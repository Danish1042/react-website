import React from 'react';
import ContentSection from '../components/ContentSection';
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main Container */}
      <div className="flex flex-wrap">
        {/* Content Section */}
        <div className="w-full md:w-2/3 p-2">
          <ContentSection title="About Me">
            {/* Personal Information and Intro */}
            <div className="shadow-lg rounded-lg p-6 mb-6">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Dummy Profile"
                  className="rounded-full w-24 h-24 mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold">Muhammad Danish</h2>
                  <p className="text-white">Full Stack Developer</p>
                </div>
              </div>
              <p className="mt-4 text-white">
                Hi, I'm Muhammad Danish, a passionate Full Stack Developer with experience in building
                modern web applications. I specialize in React, Node.js, and Express, and I love
                creating interactive and dynamic user experiences.
              </p>
            </div>

            {/* Dummy Projects */}
            <h3 className="text-xl font-bold mb-4">My Projects</h3>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold">Project 1</h4>
                  <p className="text-gray-600">
                    A brief description of Project 1 goes here. It showcases some of the key
                    features and technologies used.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold">Project 2</h4>
                  <p className="text-gray-600">
                    A brief description of Project 2 goes here. It includes details about the
                    problem it solves and the technologies used.
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold">Project 3</h4>
                  <p className="text-gray-600">
                    A brief description of Project 3 goes here. Highlight the unique aspects and
                    technologies behind this project.
                  </p>
                </div>
              </div>
            </div>
          </ContentSection>
        </div>

        {/* News Section */}
        <div className="w-full md:w-1/3 p-2">
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
