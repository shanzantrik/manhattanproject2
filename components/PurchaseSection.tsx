"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle, Lock } from "lucide-react";
import { useState } from "react";

export default function PurchaseSection() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch("/api/create-invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: 49,
          currency: "USD",
          itemDesc: "The Manhattan Project 2.0 - Book Purchase",
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Redirect to BitPay checkout
        window.location.href = data.url;
      } else {
        setError(data.error || "Failed to create payment. Please try again.");
        setIsProcessing(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      setIsProcessing(false);
      console.error("Purchase error:", err);
    }
  };

  const benefits = [
    "250+ comprehensive chapters",
    "Hundreds of original diagrams",
    "GUDIYA framework insights",
    "Technical blueprint for cognitive systems",
    "Philosophical map for the cognitive century",
  ];

  return (
    <section id="purchase" className="section-container bg-dark-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Purchase the Book</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Book Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-cream-500 mb-2">
                The Manhattan Project 2.0
              </h3>
              <p className="text-cream-400 mb-6">
                A journey into the future of intelligence itself
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-cream-300">250+ comprehensive chapters</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-cream-300">Hundreds of original diagrams</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-cream-300">GUDIYA framework insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-cream-300">Technical blueprint & philosophical map</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-cream-300">Industry transformation insights</span>
              </div>
            </div>
          </motion.div>

          {/* Purchase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-500/20 mb-4">
                <ShoppingCart className="w-10 h-10 text-primary-400" />
              </div>
              <div className="mb-6">
                <p className="text-cream-400 text-sm mb-2">Purchase Price</p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-5xl font-bold text-cream-500">$49</span>
                  <span className="text-cream-400">USD</span>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePurchase}
              disabled={isProcessing}
              className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  <span>Purchase Now</span>
                </>
              )}
            </motion.button>

            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-cream-400">
              <Lock className="w-4 h-4" />
              <span>Secure payment via BitPay</span>
            </div>

            <div className="mt-8 pt-6 border-t border-dark-700">
              <p className="text-sm text-cream-400 text-center">
                After purchase, you&apos;ll receive a confirmation email with your book access details.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
