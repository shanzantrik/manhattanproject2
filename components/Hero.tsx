"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Book Cover Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,26,26,0.15),transparent_50%)]" />
        {/* Blood red moon glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blood-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Electric blue glow */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Golden-orange trident glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Text Content - Top */}
          <div className="text-center w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 mb-4 md:mb-6 px-4 py-2 rounded-full glass-effect border border-electric-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-electric-400" />
                <span className="text-xs md:text-sm text-cream-400">Next Generation Intelligence</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="gradient-text block mb-2">Creating Next Generation</span>
                <span className="text-cream-500">Intelligence Dominance</span>
              </h1>

              <p className="text-base md:text-lg text-cream-300 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                A journey into the future of intelligence itself — not artificial, but amplified.
                Discover how humanity can stabilize the age of synthetic cognition.
              </p>

              <div className="flex items-center justify-center mb-8 md:mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#purchase" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block">
                    Discover More Now
                  </Link>
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <Link href="#about-book" className="text-cream-400 hover:text-electric-400 transition-colors">
                  <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* FlippingBook Embed - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center w-full px-2 sm:px-4 md:px-6"
          >
            <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <div className="absolute inset-0 rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(204,0,0,0.4),0_0_40px_rgba(247,168,39,0.2)] border-2 border-cream-500/30 glass-effect">
                  <iframe
                    src="https://online.flippingbook.com/view/427971648/"
                    className="w-full h-full border-0"
                    allowFullScreen
                    allow="fullscreen"
                    title="The Manhattan Project 2.0 Book Preview"
                  />
                </div>
                {/* Decorative glow rings */}
                <motion.div
                  className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-400/30 rounded-lg blur-xl -z-10 pointer-events-none"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
