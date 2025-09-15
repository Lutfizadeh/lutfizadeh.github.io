import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { personalData } from "../data/personal";
import { HiOutlineDownload } from "react-icons/hi";

const Personal = () => {
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

    const typewriterVariants = {
        hidden: { width: 0 },
        visible: {
            width: "auto",
            transition: {
                duration: 2,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                    },
                },
            }}
        >
            <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 5 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.9, rotate: 3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <img
                    src={personalData.photo}
                    alt="Profile"
                    className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg object-cover transform scale-x-[-1]"
                    style={{ boxShadow: "0 12px 25px rgba(59,130,246,0.5)" }}
                />
            </motion.div>

            <motion.div
                className="flex flex-col items-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <a
                    href={`${personalData.cv}`}
                    download
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-400/80 transition-colors shadow-md flex items-center gap-2"
                >
                    <HiOutlineDownload className="w-5 h-5" />
                    Download CV
                </a>
            </motion.div>

            <motion.div
                className="text-gray-500 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
            >
                {"{"}
            </motion.div>

            <div className="ml-8">
                <motion.div className="mb-4" variants={itemVariants}>
                    <span className="text-blue-400">"name"</span>
                    <span className="text-white">: </span>
                    <motion.span
                        className="text-yellow-300"
                        variants={typewriterVariants}
                    >
                        "{personalData.name}"
                    </motion.span>
                    <span className="text-white">,</span>
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                    <span className="text-blue-400">"description"</span>
                    <span className="text-white">: </span>
                    <motion.span
                        className="text-yellow-300"
                        variants={typewriterVariants}
                    >
                        "{personalData.description}"
                    </motion.span>
                    <span className="text-white">,</span>
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                    <span className="text-blue-400">"currently_learning"</span>
                    <span className="text-white">: </span>
                    <motion.span
                        className="text-yellow-300"
                        variants={typewriterVariants}
                    >
                        "{personalData.currentlyLearning}"
                    </motion.span>
                    <span className="text-white">,</span>
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                    <span className="text-blue-400">"status"</span>
                    <span className="text-white">: </span>
                    <motion.span
                        className="text-yellow-300"
                        variants={typewriterVariants}
                    >
                        "{personalData.status}"
                    </motion.span>
                    <span className="text-white">,</span>
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                    <span className="text-blue-400">"location"</span>
                    <span className="text-white">: </span>
                    <motion.span
                        className="text-yellow-300"
                        variants={typewriterVariants}
                    >
                        "{personalData.location}"
                    </motion.span>
                    <span className="text-white">,</span>
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                    <span className="text-blue-400">"passionate"</span>
                    <span className="text-white">: </span>
                    <motion.span
                        className="text-yellow-300"
                        variants={typewriterVariants}
                    >
                        "{personalData.passionate}"
                    </motion.span>
                    <span className="text-white">,</span>
                </motion.div>
            </div>

            <motion.div
                className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.3 }}
            >
                {"}"}
            </motion.div>
        </motion.section>
    );
};

export default Personal;
