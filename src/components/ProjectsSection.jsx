"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../app/data";
import { Code, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 text-emerald-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-emerald-400 transition-colors font-medium"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
