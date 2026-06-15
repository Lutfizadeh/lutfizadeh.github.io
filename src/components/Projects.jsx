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
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
      viewport={{ once: true, amount: 0.05 }}
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
        viewport={{ once: true, amount: 0.05 }}
      >
        {projectsData.map((project, index) => {
          // LOGIKA PENENTUAN WARNA BORDER LUAR (CARD CONTAINER)
          const isInternship = project.type === "internship";
          const isCertification =
            project.type === "certification" || project.type === "sertifikasi";

          let borderClasses = "border-gray-700 hover:border-green-400";
          let hoverBorderColor = "#10b981"; // Emerald-500 default
          let hoverShadow = "0 8px 30px rgba(16, 185, 129, 0.15)";

          if (isInternship) {
            borderClasses = "border-red-900/40 hover:border-red-500";
            hoverBorderColor = "#ef4444"; // Red-500
            hoverShadow = "0 8px 30px rgba(239, 68, 68, 0.2)";
          } else if (isCertification) {
            borderClasses = "border-yellow-900/40 hover:border-yellow-500";
            hoverBorderColor = "#eab308"; // Yellow-500
            hoverShadow = "0 8px 30px rgba(234, 179, 8, 0.2)";
          }

          return (
            <motion.article
              key={project.id}
              className={`border rounded-lg p-6 bg-gray-900 transition-colors duration-300 group ${borderClasses}`}
              variants={projectVariants}
              whileHover={{
                scale: 1.015,
                boxShadow: hoverShadow,
                borderColor: hoverBorderColor,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-gray-500 mb-2">{"{"}</div>

              <div className="ml-6">
                {/* NAME & LINKS */}
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <span className="text-blue-400">"name"</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"{project.name}"</span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 15 }}
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
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mb-3">
                  <span className="text-blue-400">"description"</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">
                    "{project.description}"
                  </span>
                  <span className="text-white">,</span>
                </div>

                {/* TECHNOLOGIES */}
                <div className="mb-3">
                  <span className="text-blue-400">"technologies"</span>
                  <span className="text-white">: [</span>
                  <div className="ml-6 mt-2 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-gray-800 px-2 py-1 rounded text-sm text-yellow-300 border border-gray-700/50"
                      >
                        "{tech}"
                        {techIndex < project.tech.length - 1 && (
                          <span className="text-white">, </span>
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-white">],</span>
                </div>

                {/* ROLE */}
                <div className="mb-3">
                  <span className="text-blue-400">"role"</span>
                  <span className="text-white">: </span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      project.role === "data_analyst"
                        ? "text-cyan-300 bg-cyan-900/30 border border-cyan-500/20"
                        : project.role.includes("fullstack")
                          ? "text-rose-300 bg-rose-900/30 border border-rose-500/20"
                          : project.role === "iot_engineer"
                            ? "text-slate-300 bg-slate-800/30 border border-slate-500/20"
                            : "text-amber-300 bg-amber-900/30 border border-amber-500/20"
                    }`}
                  >
                    "{project.role}"
                  </span>
                  <span className="text-white">,</span>
                </div>

                {/* STATUS */}
                <div className="mb-3">
                  <span className="text-blue-400">"status"</span>
                  <span className="text-white">: </span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      project.status === "completed"
                        ? "text-green-300 bg-green-900/30 border border-green-500/20"
                        : "text-orange-300 bg-orange-900/30 border border-orange-500/20"
                    }`}
                  >
                    "{project.status}"
                  </span>
                  <span className="text-white">,</span>
                </div>

                {/* TYPE MODULE */}
                <div className="mb-3">
                  <span className="text-blue-400">"type"</span>
                  <span className="text-white">: </span>
                  <span
                    className={`px-2 py-1 rounded text-sm inline-block ${
                      isInternship
                        ? "text-red-300 bg-red-900/30 border border-red-500/20"
                        : isCertification
                          ? "text-yellow-300 bg-yellow-900/30 border border-yellow-500/20"
                          : "text-emerald-300 bg-emerald-900/30 border border-emerald-500/20"
                    }`}
                  >
                    "{project.type}"
                  </span>
                  <span className="text-white">,</span>
                </div>

                {/* INDIVIDU OR TEAM */}
                <div className="mb-3">
                  <span className="text-blue-400">"individu"</span>
                  <span className="text-white">: </span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      project.individu === true
                        ? "text-green-300 bg-green-900/30 border border-green-500/20"
                        : "text-orange-300 bg-orange-900/30 border border-orange-500/20"
                    }`}
                  >
                    {project.individu === true ? "true" : "false"}
                  </span>
                  <span className="text-white">,</span>
                </div>

                {/* LINKS IN JSON OBJECT */}
                {(project.github || project.demo) && (
                  <div className="mb-3">
                    <span className="text-blue-400">"links"</span>
                    <span className="text-white">: {"{"}</span>
                    <div className="ml-6 mt-2 space-y-1">
                      {project.github && (
                        <div>
                          <span className="text-blue-400">"github"</span>
                          <span className="text-white">: </span>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-words text-yellow-300 hover:text-green-300 underline transition-colors"
                          >
                            "{project.github}"
                          </a>
                          {project.demo && (
                            <span className="text-white">,</span>
                          )}
                        </div>
                      )}
                      {project.demo && (
                        <div>
                          <span className="text-blue-400">"demo"</span>
                          <span className="text-white">: </span>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-words text-yellow-300 hover:text-green-300 underline transition-colors"
                          >
                            "{project.demo}"
                          </a>
                        </div>
                      )}
                    </div>
                    <span className="text-white">{"}"},</span>
                  </div>
                )}

                {/* DATE */}
                <div className="mb-3">
                  <span className="text-blue-400">"date"</span>
                  <span className="text-white">: </span>
                  <span className="text-purple-300 bg-purple-900/30 border border-purple-500/20 px-2 py-1 rounded text-sm inline-block">
                    "{project.date}"
                  </span>
                </div>
              </div>

              <div className="text-gray-500">{"}"}</div>

              {index < projectsData.length - 1 && (
                <div className="text-white mt-2">,</div>
              )}
            </motion.article>
          );
        })}
      </motion.div>

      <div className="text-white mt-4">]</div>
    </motion.section>
  );
};

export default Projects;
