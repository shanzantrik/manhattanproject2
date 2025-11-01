"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 40,
  });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 40,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bookRef.current) return;
    const rect = bookRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full glass-effect border border-electric-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 text-electric-400" />
                <span className="text-sm text-cream-400">Next Generation Intelligence</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="gradient-text block mb-2">Creating Next Generation</span>
                <span className="text-cream-500">Intelligence Dominance</span>
              </h1>

              <p className="text-xl md:text-2xl text-cream-300 mb-10 max-w-3xl lg:max-w-none leading-relaxed">
                A journey into the future of intelligence itself — not artificial, but amplified.
                Discover how humanity can stabilize the age of synthetic cognition.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-16">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#purchase" className="btn-primary text-lg px-8 py-4 inline-block">
                    Discover More Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+16612331023"
                    className="btn-secondary text-lg px-8 py-4 inline-block"
                  >
                    +1.661.233.1023
                  </a>
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center lg:justify-start"
              >
                <Link href="#about-book" className="text-cream-400 hover:text-electric-400 transition-colors">
                  <ArrowDown className="w-8 h-8" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Book Cover Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end perspective-1000"
          >
            <div
              ref={bookRef}
              className="relative w-full max-w-md lg:max-w-lg cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{
                  rotateX: !isFlipped ? rotateXSpring : 0,
                  rotateY: isFlipped ? 180 : rotateYSpring,
                  transformStyle: "preserve-3d",
                }}
                transition={{
                  rotateY: { duration: 0.8, ease: "easeInOut" },
                  rotateX: { duration: 0.2, ease: "easeOut" }
                }}
                className="relative w-full aspect-[2/3]"
              >
                {/* Front Cover */}
                <motion.div
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(204,0,0,0.4),0_0_40px_rgba(247,168,39,0.2)] border-2 border-cream-500/30">
                    {/* Book Cover Content - accounting for spine */}
                    <div className="absolute inset-0 right-[12px]">
                      <Image
                        src="/book_cover.jpg"
                        alt="The Manhattan Project 2.0 Book Cover"
                        fill
                        className="object-cover"
                        priority
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
                      {/* Book spine shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-dark-900/60 to-transparent" />
                    </div>
                    {/* Book Spine - Right Side (light beige/off-white) */}
                    <div className="absolute right-0 top-0 bottom-0 w-[12px] bg-gradient-to-l from-[#f5f5dc] via-[#f0f0e0] to-[#f5f5dc] z-10 border-l border-cream-500/20" />
                  </div>
                </motion.div>

                {/* Back Cover */}
                <motion.div
                  style={{
                    rotateY: 180,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(204,0,0,0.4),0_0_40px_rgba(247,168,39,0.2)] border-2 border-cream-500/30 bg-dark-800">
                    {/* Book Back Content - accounting for spine */}
                    <div className="absolute inset-0 left-[12px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800" />
                      {/* Book back design */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold text-cream-500 mb-4">The Manhattan Project 2.0</h3>
                        <p className="text-cream-300 mb-4">Creating Next Generation Intelligence Dominance</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent my-4" />
                        <p className="text-cream-400 text-sm">by Ashish Warudkar</p>
                      </div>
                      {/* Book spine shadow */}
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-dark-900/60 to-transparent" />
                    </div>
                    {/* Book Spine - Left Side (light beige/off-white) - appears on right when flipped */}
                    <div className="absolute left-0 top-0 bottom-0 w-[12px] bg-gradient-to-r from-[#f5f5dc] via-[#f0f0e0] to-[#f5f5dc] z-10 border-r border-cream-500/20" />
                  </div>
                </motion.div>
              </motion.div>

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

              {/* Click hint */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cream-400 text-sm opacity-70"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Click to flip
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
