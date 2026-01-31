"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Technical leader and frontend engineering expert with over a decade of experience building high-performance web applications at scale. As a Staff Software Engineer at Apple, I lead cross-functional teams delivering features for Apple Music, Podcast, and TV apps while driving AI-powered developer tooling—building code RAG systems, MCP servers, and contributing to secure internal AI coding assistants. My deep expertise in React, TypeScript, and modern web architectures enables me to bridge AI/ML capabilities with exceptional user experiences. Passionate about mentoring engineers on AI best practices, setting technical direction, and building intelligent, scalable products.
            </p>
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div> */}
    </section>
  )
}

