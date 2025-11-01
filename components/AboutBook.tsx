"use client";

import { motion } from "framer-motion";
import { BookOpen, Layers, Target, Zap, Network, Shield } from "lucide-react";

export default function AboutBook() {
  const features = [
    {
      icon: Layers,
      title: "250+ Chapters",
      description: "Comprehensive exploration of cognitive systems",
    },
    {
      icon: Target,
      title: "Hundreds of Diagrams",
      description: "Original visualizations of complex concepts",
    },
    {
      icon: Network,
      title: "Systems Science",
      description: "Unifying engineering, strategy, and systems thinking",
    },
    {
      icon: Shield,
      title: "AI Governance",
      description: "Framework for stabilizing synthetic cognition",
    },
  ];

  const shifts = [
    {
      from: "Deterministic Computing",
      to: "Cognitive Computing",
      icon: Zap,
    },
    {
      from: "Complex Engineered Systems (CES)",
      to: "Complex Adaptive Systems (CAS)",
      icon: Network,
    },
  ];

  return (
    <section id="about-book" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About the Book</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-4"></div>
          <p className="text-cream-400 text-lg max-w-2xl mx-auto">
            A technical blueprint and philosophical map for navigating the cognitive century
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary-400" />
            <h3 className="text-2xl font-bold text-cream-500">The Manhattan Project 2.0</h3>
          </div>

          <p className="text-lg text-cream-300 leading-relaxed mb-6">
            <span className="text-primary-400 font-semibold">&ldquo;The Manhattan Project 2.0&rdquo;</span> is
            a journey into the future of intelligence itself — not artificial, but amplified. Written
            at the crossroads of systems science, economics, and AI governance, this book introduces
            the{" "}
            <span className="text-electric-400 font-semibold">GUDIYA</span> — a revolutionary
            framework for governing cognitive systems at scale.
          </p>

          <p className="text-lg text-cream-300 leading-relaxed mb-6">
            Across <span className="text-primary-400 font-semibold">250+ chapters</span> and{" "}
            <span className="text-primary-400 font-semibold">hundreds of original diagrams</span>, the
            author unifies decades of engineering, strategy, and systems thinking into a single
            narrative: how humanity can stabilize the age of synthetic cognition.
          </p>

          <p className="text-lg text-cream-300 leading-relaxed">
            From the physics of balance to the geopolitics of intelligence, from enterprise decision
            dynamics to the architecture of national cognition grids, this book is both a technical
            blueprint and a philosophical map for navigating the cognitive century.
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <feature.icon className="w-10 h-10 text-primary-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-cream-500 mb-2">{feature.title}</h4>
              <p className="text-cream-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Industry Shifts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-cream-500 mb-6 text-center">
            Critical Industry Shifts
          </h3>
          <p className="text-lg text-cream-300 leading-relaxed mb-8 text-center">
            This is not a book about AI Algorithmics — it is a book about how the IT industry must
            grapple with some very significant shifts:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {shifts.map((shift, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-700/50 rounded-xl p-6 border border-dark-600"
              >
                <div className="flex items-center justify-center mb-4">
                  <shift.icon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="space-y-3 text-center">
                  <div>
                    <p className="text-cream-400 text-sm mb-1">From</p>
                    <p className="text-blood-400 font-semibold">{shift.from}</p>
                  </div>
                  <div className="text-primary-400">↓</div>
                  <div>
                    <p className="text-cream-400 text-sm mb-1">To</p>
                    <p className="text-electric-400 font-semibold">{shift.to}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-cream-300 text-center mt-8 leading-relaxed">
            Learning how to coexist, cooperate, and govern in a world where intelligence itself has
            become a living system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
