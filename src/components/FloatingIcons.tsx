import { motion } from 'framer-motion';
import { Brain, Code, Database, Globe, Layout } from 'lucide-react';

const icons = [
  { Icon: Brain, delay: 0 },
  { Icon: Code, delay: 1 },
  { Icon: Database, delay: 2 },
  { Icon: Globe, delay: 3 },
  { Icon: Layout, delay: 4 },
];

export const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-400 dark:text-gray-600 opacity-10"
          initial={{ y: -20, x: Math.random() * window.innerWidth }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: delay * 2,
            ease: "linear"
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
};