import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'ktsk3pbIYHA?si=xJZ-ME6yxD5Wuuje';

  return (
    <section id="video" className="bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
            See Our AI Extension in Action
          </h2>
          <p className="mt-4 text-xl text-purple-300 max-w-3xl mx-auto">
            Experience the power of AI-assisted writing for Medium with our cutting-edge Chrome extension
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-2xl mb-24"
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-purple-600 text-white rounded-full px-6 py-3 shadow-lg flex items-center space-x-3 hover:bg-purple-700 transition duration-300 text-lg"
                >
                  <Play size={28} />
                  <span className="font-semibold">Watch Demo</span>
                </button>
              </motion.div>
            </>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default VideoDemo;