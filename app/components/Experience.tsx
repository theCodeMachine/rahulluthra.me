"use client";

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      company: "Apple Inc",
      location: "Cupertino, CA",
      period: "Sep 2022 - Present",
      role: "Staff Software Engineer",
      responsibilities: [
        "Leading development of new features and maintaining existing features for Apple Music, Podcast, TV and other Media Apps.",
        "Overseeing the technical direction of frontend projects, ensuring adherence to coding standards, and maintaining code quality.",
        "Collaborating with cross-functional teams to drive product feature development and improve user experience",
        "Identifying and addressing performance issues, implementing best practices, and ensuring applications are responsive and user-friendly",
        "Performing effective code reviews, mentoring junior developers, and driving best practices in software engineering",
      ],
    },
    {
      company: "Whoop Inc",
      location: "Boston, MA",
      period: "Feb 2022 - Sep 2022",
      role: "Staff Software Engineer",
      responsibilities: [
        "Developing and maintaining the Join Whoop and Whoop Shop app.",
        "Collaborating with product managers to define requirements and prioritize features.",
        "Leading and mentoring a team of frontend developers, providing guidance, conducting code reviews, and fostering professional growth within the team.",
        "Advocating for improvements to product quality, security, and performance that have particular impact across the team and others.",
      ],
    },
    {
      company: "CarGurus Inc",
      location: "Cambridge, MA",
      period: "March 2018 - Feb 2022",
      role: "Principal Software Engineer",
      responsibilities: [
        "Translating UI/UX design wireframe into functional code, ensuring the technical feasibility of designs, and optimizing applications for maximum speed and scalability.",
        "Implementing new technologies and frameworks to improve performance and scalability",
        "Developing scalable and maintainable code using modern JavaScript frameworks and tools",
      ],
    },
    {
      company: "John Hancock Financial Services",
      location: "Boston, MA",
      period: "Nov 2016 - March 2018",
      role: "Senior Technical Lead",
      responsibilities: [
        "Assisted solution architects in designing and evaluating scalable financial applications.",
        "Led process innovations and defined frontend best practices across multiple teams.",
        "Developed API-driven digital platforms, enabling seamless integration across financial services.",
      ],
    },
    {
      company: "CVS Health",
      location: "New York, NY",
      period: "Oct 2015 - Nov 2016",
      role: "Lead Engineer",
      responsibilities: [
        "Led frontend architecture for enterprise digital applications, improving scalability and maintainability.",
        "Developed key features in AngularJS to enhance user engagement and retention.",
        "Actively contributed to CVS Health’s innovation lab, driving digital transformation.",
      ],
    },
    {
      company: "Genpact",
      location: "Noida, India",
      period: "July 2013 - Oct 2015",
      role: "Consultant",
      responsibilities: [
        "Designed and developed a multi-channel reusable UI framework.",
        "Mobile-enabled Genpact’s Akritiv Productivity suite.",
        "Conducted knowledge-sharing sessions, fostering a culture of innovation.",
      ],
    },
    {
      company: "InstantPay",
      location: "New Delhi, India",
      period: "May 2012 - July 2013",
      role: "Engineering Leader",
      responsibilities: [
        "Architected and built the core Neo banking and transaction processing platform from scratch.",
        "Defined the technology roadmap and strategy for the company.",
        "Led the engineering team to develop a secure and scalable financial infrastructure.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              {/* <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div> */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div> */}
    </section>
  );
}
