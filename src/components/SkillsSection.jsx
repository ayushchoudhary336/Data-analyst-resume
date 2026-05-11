"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../app/data";
import { Database, Code2, Globe } from "lucide-react";

const CategoryCard = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors shadow-xl group"
  >
    <div className="flex items-center mb-6">
      <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-emerald-500/20 transition-colors mr-4">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
    </div>
    
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-full text-sm hover:bg-emerald-600 hover:text-white cursor-default transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard 
            title="Data Analysis" 
            icon={Database} 
            skills={SKILLS.dataAnalysis} 
            delay={0.1}
          />
          <CategoryCard 
            title="Languages & Tech" 
            icon={Code2} 
            skills={SKILLS.languagesAndTech} 
            delay={0.2}
          />
          <CategoryCard 
            title="Web Development" 
            icon={Globe} 
            skills={SKILLS.webDev} 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
