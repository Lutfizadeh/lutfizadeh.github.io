import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { SiReact, SiVite, SiTailwindcss, SiFramer } from "react-icons/si";

const Footer = () => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentMonth = monthNames[new Date().getMonth()];
    const currentYear = new Date().getFullYear();

    const techIcons = [
        { Icon: SiReact, color: "text-sky-400", rotate: true },
        { Icon: SiVite, color: "text-purple-500" },
        { Icon: SiTailwindcss, color: "text-sky-400" },
        { Icon: SiFramer, color: "text-pink-500" },
    ];

    return (
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-1 mb-2 text-center">
                <span>// Portfolio created with</span>
                <FaHeart className="text-red-500" />
                <span>by Lutfi Zadeh Filoshof</span>
            </div>

            <div className="text-gray-500 mb-2">
                <span>// Powered by fresh idea and AI</span>
            </div>

            <div className="text-gray-500 mb-2">
                <span>
                    // Last updated: {currentMonth} {currentYear}
                </span>
            </div>

            <div className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-3">
                <span className="text-gray-500">// Made with</span>

                {techIcons.map((tech, idx) => {
                    const { Icon, color, rotate } = tech;
                    return (
                        <motion.div
                            key={idx}
                            animate={rotate ? { rotate: [0, 360] } : {}}
                            transition={
                                rotate
                                    ? {
                                          duration: 6,
                                          repeat: Infinity,
                                          ease: "linear",
                                      }
                                    : {}
                            }
                        >
                            <Icon size={16} className={color} />
                        </motion.div>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
