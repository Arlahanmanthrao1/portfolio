import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, LineChart, Users } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Technical & Development',
      Icon: Code,
      skills: ['React', 'Python', 'OpenCV', 'Django', 'TailwindCSS', 'AI/ML'],
    },
    {
      title: 'Digital Marketing',
      Icon: LineChart,
      skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics', 'Email Marketing', 'PPC'],
    },
    {
      title: 'Business Skills',
      Icon: Lightbulb,
      skills: ['Project Management', 'Business Strategy', 'Market Analysis', 'Financial Planning', 'Sales'],
    },
    {
      title: 'Soft Skills',
      Icon: Users,
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Team Management', 'Time Management'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-200 dark:border-gray-700/50 hover:border-purple-500/50 transition-colors shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <category.Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold ml-4 text-gray-800 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 rounded-full text-base font-medium border border-gray-200 dark:border-gray-600 hover:border-purple-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};