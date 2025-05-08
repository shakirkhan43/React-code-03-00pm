import React, { useState } from 'react'

const Letskilify = () => {
  const [activeCourse, setActiveCourse] = useState('fullstack');

  const buttonClasses = (course) =>   
    `px-4 py-2 rounded-full font-medium transition cursor-pointer ${
      activeCourse === course
        ? 'bg-blue-600 text-white shadow-md'
        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
    }`;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-2xl mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Most Popular Courses
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className={buttonClasses('fullstack')} onClick={() => setActiveCourse('fullstack')}>
          Full Stack Development
        </button>
        <button className={buttonClasses('mernstack')} onClick={() => setActiveCourse('mernstack')}>
          Mern Stack
        </button>
        <button className={buttonClasses('digital')} onClick={() => setActiveCourse('digital')}>
          Digital Marketing
        </button>
        <button className={buttonClasses('finance')} onClick={() => setActiveCourse('finance')}>
          Finance
        </button>
      </div>

      {/* Course Card */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {activeCourse === 'fullstack' && (
          <>
            <img
              src="https://letskillify.com/assets/images/PopularCourses/pythondev.jpg"
              alt="Python Development"
              className="w-full md:w-1/3 rounded-xl shadow-md"
            />
            <div className="md:w-2/3 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Python Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Python is a versatile and widely-used language that is high-level,
                interpreted, interactive, and object-oriented. It's ideal for software
                development. Students should have basic programming knowledge, analytical
                skills, and a willingness to learn.
              </p>
            </div>
          </>
        )}

        {activeCourse === 'mernstack' && (
          <>
            <img
              src="https://letskillify.com/assets/images/PopularCourses/mern.jpg"
              alt="MERN Stack"
              className="w-full md:w-1/3 rounded-xl shadow-md"
            />
            <div className="md:w-2/3 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">MERN Stack</h3>
              <p className="text-gray-700 leading-relaxed">
                Master the MERN stack with our comprehensive course covering MongoDB,
                Express.js, React, and Node.js. Build full-stack apps from scratch and
                deploy them to production.
              </p>
            </div>
          </>
        )}

        {activeCourse === 'digital' && (
          <>
            <img
              src="https://letskillify.com/assets/images/PopularCourses/seo.jpg"
              alt="Digital Marketing"
              className="w-full md:w-1/3 rounded-xl shadow-md"
            />
            <div className="md:w-2/3 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">SEO (Search Engine Optimization)</h3>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive SEO course equips you with skills to optimize websites,
                drive organic traffic, and boost search engine rankings.
              </p>
            </div>
          </>
        )}

        {activeCourse === 'finance' && (
          <>
            <img
              src="https://thumbs.dreamstime.com/b/finance-business-concept-invesment-graph-coins-rows-investment-growth-table-blue-color-tone-111488763.jpg"
              alt="Finance"
              className="w-full md:w-1/3 rounded-xl shadow-md"
            />
            <div className="md:w-2/3 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Finance</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn the essentials of personal finance, investing, and wealth
                management to build a secure and prosperous future.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Letskilify;
