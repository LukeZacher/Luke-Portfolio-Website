import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Brand Identity Design",
      image: "/api/placeholder/800/800",
      description:
        "Complete brand identity including logo design, color palette, and typography guidelines for a technology startup.",
      thumbnailImage: "/api/placeholder/400/400",
    },
    {
      title: "Editorial Layout",
      image: "/api/placeholder/800/1200",
      description:
        "Magazine spread design featuring custom typography and photo editing for a feature article.",
      thumbnailImage: "/api/placeholder/400/400",
    },
    {
      title: "Social Media Campaign",
      image: "/api/placeholder/1200/800",
      description:
        "Series of coordinated social media graphics for a product launch campaign.",
      thumbnailImage: "/api/placeholder/400/400",
    },
    {
      title: "Website Redesign",
      image: "/api/placeholder/1920/1080",
      description:
        "Complete website redesign including UI/UX improvements and responsive layouts.",
      thumbnailImage: "/api/placeholder/400/400",
    },
    {
      title: "Logo Collection",
      image: "/api/placeholder/800/800",
      description:
        "Collection of logo designs for various clients across different industries.",
      thumbnailImage: "/api/placeholder/400/400",
    },
    {
      title: "Marketing Materials",
      image: "/api/placeholder/800/600",
      description:
        "Print and digital marketing materials including brochures, flyers, and social media assets.",
      thumbnailImage: "/api/placeholder/400/400",
    },
  ];

  const workExperience = [
    {
      company: "Fidelity Financial Corporation",
      title: "Digital Marketing and IT Support Intern",
      period: "August 2024 - Present",
      type: "Hybrid",
      responsibilities: [
        "Designed logos, branding, documents, and business cards",
        "Managed social media presence and created engaging content",
        "Implemented and managed Google Workspace",
        "Developed company website",
        "Provided technical support and troubleshooting",
      ],
    },
    {
      company: "U.S. Air Force Research Project",
      title: "Web Developer and Research Assistant",
      period: "2024 - Present",
      type: "Remote",
      responsibilities: [
        "Developed informational website and simulation tool interface",
        "Collaborated with team via GitHub and online meetings",
        "Created project branding and logo",
        "Implemented front-end and back-end functionality",
        "Contributed to federally funded research project",
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add email handling logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* All the sections from before remain exactly the same */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        {/* Navigation content */}
      </nav>

      <section className="pt-20 pb-32 bg-transparent transition-opacity duration-1000">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-6 mb-6">
              <img
                src="/api/placeholder/120/120"
                alt="Luke's Portrait"
                className="rounded-full w-28 h-28 object-cover"
              />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Hi, I'm Luke
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-2">
              Computer Programmer & Graphic Designer
            </p>
            <div className="inline-block bg-emerald-100 px-4 py-1 rounded-full">
              <p className="text-emerald-700 text-sm font-medium">
                Open to Work Opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600">
                I am graduating in 2025 with a Bachelor of Science in Computer
                Science and a Bachelor of Arts in Graphic Design from Creighton
                University in Omaha, NE. Currently based in Omaha, I am open to
                remote work or relocation opportunities.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold mb-4">
                  Programming Languages & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "JavaScript",
                    "HTML/CSS",
                    "Java",
                    "SQL",
                    "React",
                    "Tailwind",
                    "Django",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Programming Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full Stack Web Development",
                    "Data Structures",
                    "Algorithms",
                    "UI/UX Design",
                    "Responsive Design",
                    "Version Control",
                    "Agile Development",
                    "Team Collaboration",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Creative Software</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Photoshop",
                    "Illustrator",
                    "Figma",
                    "Canva",
                    "Affinity",
                    "Final Cut Pro",
                    "Logic Pro",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Creative Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Branding",
                    "Logo Design",
                    "Social Media",
                    "Document Design",
                    "Print Design",
                    "Desktop Publishing",
                    "Video Editing",
                    "Photography",
                    "Photo Editing",
                    "Music Production",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Professional Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MacOS",
                    "Windows",
                    "Microsoft Office",
                    "Google Workspace",
                    "Github",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="text-gray-600 font-medium">{job.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{job.period}</p>
                    <p className="text-gray-500">{job.type}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Design Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-square w-full relative overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={project.thumbnailImage}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <h3 className="mt-3 text-center font-medium text-gray-800 text-sm">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <h3 className="text-2xl font-bold mt-4">{selectedProject.title}</h3>
            <p className="text-gray-600 mt-2">{selectedProject.description}</p>
          </div>
        </div>
      )}

      <section id="contact" className="bg-blue-50 py-20">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-800"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-800"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
