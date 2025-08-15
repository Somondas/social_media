"use client";
import React from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <>
      <motion.div
        className="w-64 h-64 rota bg-amber-300"
        style={{
          borderRadius: "80% 70% 60% 90%",
        }}
      ></motion.div>
      <motion.div
        className="w-64 h-64 bg-amber-300 rotate-12"
        style={{
          borderRadius: "90% 90% 80% 50%",
        }}
      ></motion.div>
      <motion.div
        className="w-64 h-64 bg-amber-300"
        style={{
          borderRadius: "60% 80% 80% 120%",
        }}
      ></motion.div>
    </>
  );
};

export default LoginPage;
