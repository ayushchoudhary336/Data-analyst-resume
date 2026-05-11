"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../app/data";
import { Award, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Licenses & <span className="text-emerald-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0 mr-4">
                  <img src={cert.image} alt={cert.organization} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-100 leading-tight">{cert.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.organization}</p>
                </div>
              </div>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800">
                <span className="text-gray-500 text-sm">{cert.date}</span>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center"
                >
                  Verify <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
