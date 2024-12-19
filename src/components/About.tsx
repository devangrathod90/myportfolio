import React from 'react'

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 p-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center pt-20 pb-8">
          
        <h2 className="text-5xl font-extrabold font-ubuntu tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
          About 
        </h2>
        <hr className="w-32 h-1 border-t-0 bg-indigo-500 mx-auto my-3" />
        </div>
        <div className="flex justify-center items-center text-center my-8">
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
            Here you will find more information about me, what I do, and my
            current skills, mostly in terms of programming and technology.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12">
        <div>
          <h2 className="text-3xl font-bold mb-5 font-ubuntu text-indigo-400">Experience</h2>
          <div>
            <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-300">
                Suvidha Foundation
                <span className="block text-sm font-light text-gray-400">Web Development (Internship)</span>
                <span className="block text-sm font-light text-gray-400">15-Jan-24 - 15-Apr-24</span>
              </h3>
              <ul className="mt-4 pl-5 list-disc space-y-2 text-gray-400">
                <li>Built and refined front-end features using HTML, CSS, JavaScript, and Bootstrap.</li>
                <li>Actively participated in weekly tech meetings to identify and troubleshoot website issues.</li>
                <li>Enhanced the visual and interactive aspects of the organization’s website.</li>
              </ul>
            </div>
            <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-300">
                Slash Mark
                <span className="block text-sm font-light text-gray-400">Web Development (Internship)</span>
                <span className="block text-sm font-light text-gray-400">7-Jan-23 - 7-Feb-23</span>
              </h3>
              <ul className="mt-4 pl-5 list-disc space-y-2 text-gray-400">
                <li>Utilized HTML5, CSS, JavaScript, Bootstrap, ReactJS, NodeJS, and MongoDB to develop websites.</li>
                <li>Gained hands-on experience in full-stack development through diverse projects.</li>
                <li>Collaborated with a development team to implement efficient and user-friendly web solutions.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-5 font-ubuntu text-indigo-400">Skills</h2>
          <ul className="flex flex-wrap gap-4 mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            {[
              "HTML5",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
            ].map((skill, index) => (
              <li
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg text-sm shadow-lg transform hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About