"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      My journey into the world of technology was profoundly influenced by the towering 
      presence of the Salesforce Tower in my hometown of Richmond. Gazing across the SF Bay, 
      I couldn't help but marvel at its symbolic significance and the tech industry's impact on our economy,
      especially here in the bay area. 
      This awe-inspiring structure ignited my curiosity, prompting me to explore technology's dynamic and 
      ever-evolving realm.
      </p>

      <p>
      Shaping my career, I aim to bring diverse perspectives to an industry lacking Latinx representation. The tech boom,
       driving innovation but raising Bay Area prices, impacts non-tech workers. Recognizing technology's broader community impact 
       fuels my commitment to inclusivity.
      </p>
    </motion.section>
  );
}
