import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { personalData } from '../data/personal';

const Contact = () => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactItems = [
    {
      key: "email",
      value: personalData.email,
      icon: Mail,
      href: `mailto:${personalData.email}`,
      color: "#10b981"
    },
    {
      key: "github", 
      value: personalData.github,
      icon: Github,
      href: `https://${personalData.github}`,
      color: "#6366f1"
    },
    {
      key: "linkedin",
      value: personalData.linkedin, 
      icon: Linkedin,
      href: `https://${personalData.linkedin}`,
      color: "#0ea5e9"
    },
    {
      key: "instagram",
      value: personalData.instagram,
      icon: Instagram,
      href: `https://${personalData.instagram}`,
      color: "#e1306c"
    }
  ];

  return (
    <motion.section 
      className="mb-8" 
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-4">
        <span className="text-blue-400 text-xl">"contact"</span>
        <span className="text-white">: {"{"}</span>
      </div>
      
      <div className="ml-8">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div 
              key={item.key}
              className="mb-3 flex items-center group"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              delay={index * 0.1}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent 
                    size={16} 
                    style={{ color: item.color }}
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <span className="text-blue-400">"{item.key}"</span>
                  <span className="text-white">: </span>
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-yellow-300 hover:text-green-300 cursor-pointer transition-colors underline-offset-4 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    "{item.value}"
                  </motion.a>
                  {index < contactItems.length - 1 && (
                    <span className="text-white">,</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="text-white">{"}"}</div>
    </motion.section>
  );
};

export default Contact;