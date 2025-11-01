"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Brain } from "lucide-react";
import Image from "next/image";

export default function AboutAuthor() {
  const education = [
    { name: "IIT Bombay", icon: GraduationCap },
    { name: "UC Irvine", icon: GraduationCap },
    { name: "Harvard", icon: GraduationCap },
    { name: "MIT Sloan", icon: GraduationCap },
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "Four Decades",
      description: "At the intersection of complex systems and enterprise transformation",
    },
    {
      icon: Award,
      title: "Advisory Roles",
      description: "Technology, healthcare, and consulting organizations including Ernst & Young",
    },
    {
      icon: Brain,
      title: "GUDIYA Framework",
      description: "Creator of Governance Utility for Decision Identity Yielding Auditability",
    },
  ];

  return (
    <section id="about-author" className="section-container bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About the Author</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"></div>
        </motion.div>

        {/* Author Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-full max-w-sm">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-electric-500/20 border-2 border-cream-500/20">
              <Image
                src="/author.jpg"
                alt="Ashish Warudkar"
                fill
                className="object-cover"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
            </div>
            {/* Decorative glow */}
            <motion.div
              className="absolute -bottom-4 -left-4 w-full h-full border-2 border-electric-400/30 rounded-2xl blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto mb-12"
        >
            <p className="text-lg text-cream-300 leading-relaxed">
              <span className="text-primary-400 font-semibold">Ashish Warudkar</span> is a systems
              engineer, strategist, and author whose career spans four decades at the intersection
              of complex systems, enterprise transformation, and artificial intelligence.
            </p>

            <p className="text-lg text-cream-300 leading-relaxed">
              An alumnus of <span className="text-electric-400">IIT Bombay, UC Irvine, Harvard, and MIT Sloan</span>,
              Ashish has served in advisory roles across technology, healthcare, and consulting
              organizations including Ernst & Young. His lifelong pursuit has been to understand how
              intelligence—human, organizational, and synthetic—achieves stability amidst complexity.
            </p>

            <div className="glass-effect rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-cream-500 mb-4 flex items-center space-x-2">
                <Brain className="w-6 h-6 text-electric-400" />
                <span>GUDIYA Framework</span>
              </h3>
              <p className="text-cream-300 leading-relaxed">
                He is the creator of{" "}
                <span className="text-primary-400 font-semibold">
                  GUDIYA (Governance Utility for Decision Identity Yielding Auditability)
                </span>
                , a pioneering framework that redefines how enterprises govern AI, cognition, and
                systemic performance at scale. His work unites systems science, cybernetics, and
                governance engineering into a single, integrated vision—one that positions stability
                as the next frontier of intelligence.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold text-cream-500 mb-4">Manhattan Project 2.0 Initiative</h3>
              <p className="text-cream-300 leading-relaxed">
                Through his <span className="text-blood-400 font-semibold">&ldquo;Manhattan Project 2.0&rdquo;</span> initiative,
                Ashish is advancing the architecture of large-scale cognitive grids—civilian and
                military—aimed at ensuring that the coming era of autonomous AI remains synchronized,
                traceable, and safe for civilization.
              </p>
            </div>
          </motion.div>

        {/* Education & Highlights - Below Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-bold text-cream-500 mb-6 flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-electric-400" />
              <span>Education</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-dark-700/50 border border-dark-600"
                >
                  <edu.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <p className="text-sm text-cream-300 font-medium">{edu.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Highlights */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cream-500 mb-2">{highlight.title}</h4>
                    <p className="text-cream-300">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
