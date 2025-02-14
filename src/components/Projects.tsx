import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, LineChart, Shirt } from 'lucide-react';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Image Recognition Chatbot',
      description: 'A 24-hour hackathon project that combines computer vision with natural language processing to create an intelligent chatbot capable of analyzing and discussing images.',
      Icon: Bot,
      tags: ['Python', 'OpenCV', 'NLP', 'Machine Learning'],
      link: '#',
    },
    {
      title: 'Digital Marketing Agency',
      description: 'Founded and managed a digital marketing agency serving multiple clients across various industries, implementing successful marketing strategies and campaigns.',
      Icon: LineChart,
      tags: ['Marketing', 'SEO', 'Social Media', 'Analytics'],
      link: '#',
    },
    {
      title: 'AI Fashion Tech Project',
      description: 'Ongoing college project exploring the intersection of AI and fashion technology, developing innovative solutions for the retail industry.',
      Icon: Shirt,
      tags: ['AI', 'Fashion Tech', 'React', 'Python'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-6 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
                    <project.Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-100 rounded-full text-sm border border-gray-200 dark:border-gray-600 group-hover:border-purple-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};