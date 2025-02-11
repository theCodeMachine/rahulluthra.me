"use client";

import { motion } from "framer-motion";
import { Car, Dumbbell, Music, SquareArrowOutUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Music className="w-12 h-12 text-red-500" />,
      title: "Apple Music",
      url: "https://music.apple.com",
      description: "Apple Music web player offering access to over 100 million songs, curated playlists, and exclusive content directly from your browser without the need for a dedicated application. This web player provides access to the full Apple Music catalog, your personal library, curated playlists, and more.",
    },
    {
      icon: <Music className="w-12 h-12 text-yellow-500" />,
      title: "100 Best Albums - Apple Music",
      description: "In 2024, Apple Music introduced the `100 Best Albums` list website, a curated selection of the greatest records ever made. This list spans over 65 years of music history and encompasses various genres, from country and pop to rock, hip-hop, and electronic.",
      url: "https://100best.music.apple.com",
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-green-500" />,
      title: "Join WHOOP",
      description: "Web app to become a WHOOP member, and select the membership plan that aligns with your goals. The web app which offer multiple membership option and accessories.",
      url: "https://join.whoop.com",
    },
    {
      icon: <Car className="w-12 h-12 text-blue-500" />,
      title: "CarGurus",
      description:
        "CarGurus is a leading online marketplace for buying and selling cars. It connects buyers with sellers in their local area, providing a wide range of car models and prices to choose from.",
      url: "https://www.cargurus.com",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={service.url} target="_blank" rel="noopener noreferrer">
                {/* Add the icon here */}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold ml-4 dark:text-white">
                    {service.title}
                  </h3>
                  <SquareArrowOutUpRight className="text-gray-400 dark:text-white ml-auto" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div> */}
    </section>
  );
}
