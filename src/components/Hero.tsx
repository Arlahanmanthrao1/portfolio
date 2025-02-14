import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-16 bg-white dark:bg-transparent transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 transition-all">
          <img
            src="https://res.cloudinary.com/dl8hswxt2/image/upload/v1739522936/profile-img_pioh1b.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Arla Hanmanth Rao
        </h1>
        
        <div className="text-xl md:text-2xl text-purple-400 mb-8 h-8">
          <TypeAnimation
            sequence={[
              'AI Enthusiast',
              2000,
              'Digital Marketer',
              2000,
              'Full-Stack Developer',
              2000,
            ]}
            repeat={Infinity}
          />
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
          Second-year B.Tech student passionate about AI technology, digital marketing, 
          and web development. Building the future, one project at a time.
        </p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          Know More
        </motion.a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ChevronDown size={32} className="text-purple-400" />
      </motion.div>
    </section>
  );
};