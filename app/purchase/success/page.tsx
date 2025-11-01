"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PurchaseSuccess() {
  const [invoiceId, setInvoiceId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setInvoiceId(params.get("invoiceId"));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full glass-effect rounded-2xl p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-400" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Thank you for purchasing <span className="text-primary-400 font-semibold">&ldquo;The Manhattan Project 2.0&rdquo;</span>
        </p>

        {invoiceId && (
          <div className="bg-dark-700/50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-400 mb-1">Invoice ID</p>
            <p className="text-primary-400 font-mono">{invoiceId}</p>
          </div>
        )}

        <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Check Your Email</p>
              <p className="text-gray-400 text-sm">
                A confirmation email with your book access details has been sent to your email address.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Access Your Book</p>
              <p className="text-gray-400 text-sm">
                Follow the instructions in the email to access your digital copy of the book.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="#contact" className="btn-secondary">
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
