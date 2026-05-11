"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }
    console.log("Subscribed to newsletter:", email);
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Ayush Kumar Choudhary</h3>
          <p className="text-gray-500 text-sm max-w-sm">
            Data Analyst & Engineer. Transforming complex data into actionable business strategies.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-md mx-auto md:mx-0 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Subscribe to newsletter"
              className="w-full bg-gray-900 border border-gray-800 rounded-full py-3 pl-6 pr-14 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-900 text-center flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Ayush Kumar Choudhary. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gray-300 transition-colors">GitHub</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
