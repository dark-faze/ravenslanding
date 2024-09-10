import React from 'react';
import { Twitter } from 'lucide-react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} MediumRaven. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <span className="text-gray-400">
              Made with 💜 by
              <a
                href="https://x.com/akhlas_hussain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300 ml-1"
              >
                @akhlas_hussain
              </a>
            </span>
            <div className="flex space-x-6">
              <a
                href="https://x.com/akhlas_hussain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              {/* <a
                href="https://www.producthunt.com/posts/mediumraven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Gift size={24} />
                <span className="sr-only">Product Hunt</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;