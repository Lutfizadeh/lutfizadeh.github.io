import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { techStackData } from "../data/techStack";

const TechStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const techVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "backOut",
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const TechStackSection = ({ title, techs, delay = 0 }) => (
        <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay: delay,
                    },
                },
            }}
        >
            <div className="mb-4 ml-8">
                <span className="text-blue-400 text-lg">"{title}"</span>
                <span className="text-white">: [</span>
            </div>

            <motion.div
                className="ml-16 flex flex-wrap gap-3 mb-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {techs.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <motion.div
                            key={index}
                            className="group relative"
                            variants={techVariants}
                        >
                            <div className="flex items-center gap-2 text-yellow-300 bg-gray-900 px-3 py-2 rounded border border-gray-700">
                                <IconComponent
                                    size={16}
                                    style={{ color: tech.color }}
                                />
                                <span>"{tech.name}"</span>
                            </div>
                            {index < techs.length - 1 && (
                                <span className="text-white ml-1 absolute -right-2 top-2">
                                    ,
                                </span>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>

            <div className="text-white ml-8">],</div>
        </motion.div>
    );

    return (
        <motion.section
            className="mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="mb-6">
                <span className="text-blue-400 text-xl">"tech_stack"</span>
                <span className="text-white">: {"{"}</span>
            </div>

            <TechStackSection
                title="main"
                techs={techStackData.main}
                delay={0.2}
            />

            <TechStackSection
                title="other_tools"
                techs={techStackData.other}
                delay={0.4}
            />

            <div className="text-white">{"}"}</div>
        </motion.section>
    );
};

export default TechStack;
