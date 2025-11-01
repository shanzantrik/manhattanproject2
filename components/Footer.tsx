"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const hours = [
    { day: "Mon", time: "09:00 am – 05:00 pm" },
    { day: "Tue", time: "09:00 am – 05:00 pm" },
    { day: "Wed", time: "09:00 am – 05:00 pm" },
    { day: "Thu", time: "09:00 am – 05:00 pm" },
    { day: "Fri", time: "09:00 am – 05:00 pm" },
    { day: "Sat", time: "Closed" },
    { day: "Sun", time: "Closed" },
  ];

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-cream-500 mb-4">Manhattan Project 2.0</h3>
            <div className="space-y-3 text-cream-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-electric-400 flex-shrink-0" />
                <span className="text-sm">
                  658 E Lago Lindo Rd, Palmdale, CA 93550
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-electric-400 flex-shrink-0" />
                <a
                  href="tel:+16612331023"
                  className="text-sm hover:text-electric-400 transition-colors"
                >
                  +1.661.233.1023
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-electric-400 flex-shrink-0" />
                <a
                  href="mailto:contact@manhattanproject20.com"
                  className="text-sm hover:text-electric-400 transition-colors"
                >
                  contact@manhattanproject20.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold text-cream-500 mb-4 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-electric-400" />
              <span>Hours</span>
            </h3>
            <div className="space-y-2">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm text-cream-300"
                >
                  <span className={item.time === "Closed" ? "text-cream-500/60" : ""}>
                    {item.day}
                  </span>
                  <span className={item.time === "Closed" ? "text-cream-500/60" : ""}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-cream-500 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#about-author"
                className="block text-sm text-cream-300 hover:text-primary-400 transition-colors"
              >
                About the Author
              </Link>
              <Link
                href="#about-book"
                className="block text-sm text-cream-300 hover:text-primary-400 transition-colors"
              >
                About the Book
              </Link>
              <Link
                href="#purchase"
                className="block text-sm text-cream-300 hover:text-primary-400 transition-colors"
              >
                Purchase Book
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8 text-center">
          <p className="text-cream-300 text-sm">
            Copyright © 2025 Manhattan Project 2.0 - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
