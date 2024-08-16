import React from "react";
import { github, LinkedIn, Email } from "../assets";

const Socials = () => {
  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-white text-xl font-bold mb-4">Connect with Me</h2>
        <div className="flex space-x-8">
          {/* Email */}
          <a
            href="mailto:amaanhreed@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-secondary transition-colors"
          >
            <img src={Email} alt="Email" className="w-8 h-8" />
            <span className="text-white font-medium">Email</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdullah-al-amaan-2813b6292/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-secondary transition-colors"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
            <span className="text-white font-medium">LinkedIn</span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/AbdullahAlAmaan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-secondary transition-colors"
          >
            <img src={github} alt="GitHub" className="w-8 h-8" />
            <span className="text-white font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
