import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Personal from './components/Personal';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-green-400 font-mono p-8 overflow-x-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header dengan efek terminal */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-green-500 text-sm mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            // Hello World!
          </motion.div>
          <motion.div 
            className="text-2xl font-bold text-green-400 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            $ cat my_portfolio.json
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <main>
          <Personal />
          <TechStack />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Terminal cursor effect */}
        <motion.div
          className="fixed bottom-4 right-4 w-3 h-5 bg-green-400"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

export default App;