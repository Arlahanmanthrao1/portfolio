import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Briefcase } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      year: '2022',
      title: 'Started B.Tech',
      description: 'Began journey in technology and innovation',
      Icon: BookOpen,
    },
    {
      year: '2023',
      title: 'AI Hackathon Winner',
      description: 'Developed an innovative Image Recognition Chatbot',
      Icon: Award,
    },
    {
      year: '2024',
      title: 'Digital Marketing Agency',
      description: 'Founded and grew a successful digital marketing agency',
      Icon: Briefcase,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            {/* <div className="w-64 h-64 mx-auto mb-8 rounded-lg overflow-hidden shadow-xl">
              
            </div> */}
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm a second-year B.Tech student with a passion for technology and innovation. My journey spans across AI technology, digital marketing, and web development, where I combine technical expertise with innovative solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Currently focused on AI-driven projects and digital marketing strategies, I'm constantly exploring new technologies and methodologies to stay at the forefront of digital innovation.
            </p>
          </div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  <item.Icon size={24} />
                </div>
                <div>
                  <div className="text-sm text-purple-400">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};