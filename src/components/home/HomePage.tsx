"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";

const HomePage = () => {
  return (
    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="text-3xl md:text-7xl font-bold text-white text-center">
        Streamline your calls with Toingg
      </div>
      <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
        Making automated calls a breeze!
      </div>
      <Link
        href="/campaign"
        className="bg-white rounded-full w-fit text-black px-4 py-2"
      >
        Try now
      </Link>
    </motion.div>
    </AuroraBackground>
  );
};

export default HomePage;
