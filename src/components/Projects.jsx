import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/projects";

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const projectVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
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

    return (
        <motion.section
            className="mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="mb-6">
                <span className="text-blue-400 text-xl">"projects"</span>
                <span className="text-white">: [</span>
            </div>

            <motion.div
                className="ml-8 space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projectsData.map((project, index) => (
                    <motion.article
                        key={project.id}
                        className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:border-green-400 transition-colors duration-300 group"
                        variants={projectVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 8px 30px rgba(16, 185, 129, 0.2)",
                            borderColor: "#10b981",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="text-gray-500 mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {"{"}
                        </motion.div>

                        <div className="ml-6">
                            <motion.div
                                className="mb-3 flex items-center justify-between"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                <div>
                                    <span className="text-blue-400">
                                        "name"
                                    </span>
                                    <span className="text-white">: </span>
                                    <span className="text-yellow-300">
                                        "{project.name}"
                                    </span>
                                    <span className="text-white">,</span>
                                </div>

                                <div className="flex gap-2">
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-green-400 transition-colors"
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 15,
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github size={16} />
                                        </motion.a>
                                    )}
                                    {project.demo && (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-green-400 transition-colors"
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: -15,
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ExternalLink size={16} />
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <span className="text-blue-400">
                                    "description"
                                </span>
                                <span className="text-white">: </span>
                                <span className="text-yellow-300">
                                    "{project.description}"
                                </span>
                                <span className="text-white">,</span>
                            </motion.div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <span className="text-blue-400">
                                    "technologies"
                                </span>
                                <span className="text-white">: [</span>
                                <div className="ml-6 mt-2 flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className="inline-block bg-gray-800 px-2 py-1 rounded text-sm"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                delay: 0.6 + techIndex * 0.1,
                                                duration: 0.3,
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "#374151",
                                            }}
                                        >
                                            <span className="text-yellow-300">
                                                "{tech}"
                                            </span>
                                            {techIndex <
                                                project.tech.length - 1 && (
                                                <span className="text-white">
                                                    ,{" "}
                                                </span>
                                            )}
                                        </motion.span>
                                    ))}
                                </div>
                                <span className="text-white">],</span>
                            </motion.div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                <span className="text-blue-400">"role"</span>
                                <span className="text-white">: </span>
                                <motion.span
                                    className={`px-2 py-1 rounded text-sm ${
                                        project.role === "data_analyst"
                                            ? "text-cyan-300 bg-cyan-900/30"
                                            : project.role ===
                                              "fullstack_developer"
                                            ? "text-rose-300 bg-rose-900/30"
                                            : project.role === "iot_engineer"
                                            ? "text-slate-300 bg-slate-800/30"
                                            : "text-amber-300 bg-amber-900/30"
                                    }`}
                                    animate={{
                                        scale:
                                            project.role === "backend"
                                                ? [1, 1.05, 1]
                                                : 1,
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat:
                                            project.role === "backend"
                                                ? Infinity
                                                : 0,
                                        repeatDelay: 3,
                                    }}
                                >
                                    "{project.role}"
                                </motion.span>
                                <span className="text-white">,</span>
                            </motion.div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                <span className="text-blue-400">"status"</span>
                                <span className="text-white">: </span>
                                <motion.span
                                    className={`px-2 py-1 rounded text-sm ${
                                        project.status === "completed"
                                            ? "text-green-300 bg-green-900/30"
                                            : "text-orange-300 bg-orange-900/30"
                                    }`}
                                    animate={{
                                        scale:
                                            project.status === "completed"
                                                ? [1, 1.05, 1]
                                                : 1,
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat:
                                            project.status === "completed"
                                                ? Infinity
                                                : 0,
                                        repeatDelay: 3,
                                    }}
                                >
                                    "{project.status}"
                                </motion.span>
                                <span className="text-white">,</span>
                            </motion.div>

                            {(project.github || project.demo) && (
                                <motion.div
                                    className="mb-3"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                >
                                    <span className="text-blue-400">
                                        "links"
                                    </span>
                                    <span className="text-white">: {"{"}</span>
                                    <div className="ml-6 mt-2 space-y-1">
                                        {project.github && (
                                            <div>
                                                <span className="text-blue-400">
                                                    "github"
                                                </span>
                                                <span className="text-white">
                                                    :{" "}
                                                </span>
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="break-words text-yellow-300 hover:text-green-300 underline transition-colors"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    "{project.github}"
                                                </motion.a>
                                                {project.demo && (
                                                    <span className="text-white">
                                                        ,
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        {project.demo && (
                                            <div>
                                                <span className="text-blue-400">
                                                    "demo"
                                                </span>
                                                <span className="text-white">
                                                    :{" "}
                                                </span>
                                                <motion.a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="break-words text-yellow-300 hover:text-green-300 underline transition-colors"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    "{project.demo}"
                                                </motion.a>
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-white">{"}"}</span>
                                </motion.div>
                            )}
                        </div>

                        <motion.div
                            className="text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {"}"}
                        </motion.div>

                        {index < projectsData.length - 1 && (
                            <div className="text-white mt-2">,</div>
                        )}
                    </motion.article>
                ))}
            </motion.div>

            <div className="text-white mt-4">]</div>
        </motion.section>
    );
};

export default Projects;
