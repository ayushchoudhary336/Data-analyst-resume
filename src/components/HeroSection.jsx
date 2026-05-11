"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { ROLES } from "../app/data";

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[currentRoleIndex];
    let timeout;

    if (!isDeleting && currentText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? role.substring(0, prev.length - 1)
            : role.substring(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl md:text-2xl text-gray-400 mb-4 tracking-wider uppercase">
          Hello, I'm
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 mb-6 drop-shadow-lg">
          Ayush Kumar Choudhary
        </h1>
        
        <div className="h-12 mb-8">
          <p className="text-2xl md:text-4xl font-light text-gray-300 flex items-center justify-center">
            <span className="mr-2">I am a</span>
            <span className="font-semibold text-emerald-400 min-w-[300px] text-left inline-block">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
        </div>

        <p className="max-w-2xl text-gray-400 mb-10 text-lg md:text-xl mx-auto leading-relaxed">
          B.Tech CSE final year student at Galgotias University, passionate about transforming raw data into actionable business insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/resume.pdf"
            download="Ayush_Kumar_Choudhary_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium flex items-center justify-center transition-colors shadow-lg shadow-emerald-500/30"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-full font-medium flex items-center justify-center transition-colors shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
