import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ToolsHub",
      description: "Toolshub is a unified web platform offering a collection of useful tools designed for developers and students",
      technologies: ["Javascript", "UI"],
      image: "/ToolsHub.png",
      github: "https://github.com/shaik3311/ToolsHub",
      demo: "https://toolshub3311.netlify.app/"
    },
    {
      id: 2,
      title: "SpendWise",
      description: "SpendWise is an expense tracking application that allows users to record transactions by entering amount, category, and date, while displaying real-time expense calculations and securely storing data using local storage.",
      technologies: ["Javascript", "UI"],
      image: "/spendwise.png",
      github: "https://github.com/shaik3311/SpendWise---An-Expense-Tracker",
      demo: "https://spendwise3311.netlify.app/"
    },
    {
      id: 3,
      title: "Notes App",
      description: "A React-based notes application that allows users to create, edit, and manage notes with real-time updates, utilizing two-way data binding and local storage for persistent data storage.",
      technologies: ["React", "Tailwind css"],
      image: "/Notes-app.jpg",
      github: "https://github.com/shaik3311/Notes_App-React_two_way_binding",
      demo: "https://notes-app-3311.netlify.app/"
    }
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div id='projects' className="group relative bg-black rounded-xl overflow-hidden border border-gray-800 transition-all duration-500 hover:border-blue-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(59,130,246,0.3),0_0_60px_rgba(59,130,246,0.15)]">
        {/* Image Container */}
        <div className="relative h-60 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay with Links */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/95 to-emerald-500/95 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-5">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white px-5 py-3 bg-black/30 backdrop-blur-md rounded-lg transition-all duration-300 hover:bg-black/50 hover:scale-110 translate-y-5 group-hover:translate-y-0"
              aria-label="View GitHub Repository"
            >
              <Github size={24} />
              <span className="text-sm font-semibold">GitHub</span>
            </a>
            
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white px-5 py-3 bg-black/30 backdrop-blur-md rounded-lg transition-all duration-300 hover:bg-black/50 hover:scale-110 translate-y-5 group-hover:translate-y-0"
                aria-label="View Live Demo"
              >
                <ExternalLink size={24} />
                <span className="text-sm font-semibold">Live Demo</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-blue-400">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-[15px] leading-relaxed mb-5 min-h-[72px]">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-gradient-to-br from-gray-900 to-gray-800 text-blue-400 rounded-full text-xs font-semibold border border-gray-700 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-emerald-500 hover:text-white hover:border-blue-500 hover:-translate-y-0.5 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent lg:py-20 py-5 px-5 flex flex-col justify-center items-center gap-5">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wider">
          My Projects
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A collection of my recent work showcasing various technologies and problem-solving approaches
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;