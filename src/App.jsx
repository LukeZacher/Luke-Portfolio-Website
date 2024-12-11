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
      title: "Logo Billboard",
      image: "/images/Billboard.png",
      description:
        "A part of a brand identity project using a logo I created as a billboard design.",
      thumbnailImage: "/images/Billboard.png",
    },
    {
      title: "Box Packaging Design",
      image: "/images/BoxDesign.png",
      description:
        "Designed the size and style of a fictional product packaging in Illustrator. The design was later printed and assembled as a physical box.",
      thumbnailImage: "/images/BoxDesign.png",
    },
    {
      title: "Informational Document",
      image: "/images/BusinessBenefits.png",
      description:
        "Clean, professional document going over services the business can provide. The document is printed and handed to clients.",
      thumbnailImage: "/images/BusinessBenefits.png",
    },
    {
      title: "Collage",
      image: "/images/Collage.jpg",
      description:
        "Themed sports collage around the Minensota Timberwolves and their star player, Anthony Edwards. Created using Photoshop",
      thumbnailImage: "/images/Collage.jpg",
    },
    {
      title: "Logo",
      image: "/images/FFEFLogo.png",
      description:
        "New logo variant for a business redesign. Created in Affinity Designer.",
      thumbnailImage: "/images/FFEFLogo.png",
    },
    {
      title: "Still Life Illustration",
      image: "/images/StillLife.jpg",
      description:
        "Still Life illustration made in Illustrator from a source image.",
      thumbnailImage: "/images/StillLife.jpg",
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
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/images/Luke-Logo.svg"
                alt="Your Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-gray-900">Luke</span>
            </div>

            <div className="hidden md:flex space-x-8 ml-auto">
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-gray-900"
              >
                Experience
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-32 bg-transparent transition-opacity duration-1000">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm Luke
            </h1>
            <p className="text-xl text-gray-600 mb-3">
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
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <div className="mb-12">
            <p className="text-gray-600">
              I am graduating in 2025 with a Bachelor of Science in Computer
              Science and a Bachelor of Arts in Graphic Design from Creighton
              University in Omaha, NE. Currently based in Omaha, I am open to
              remote work or relocation opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      <section id="experience" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
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
        <div className="max-w-6xl mx-auto px-4">
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
