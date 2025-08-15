"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400", // Lobster only has a regular weight
  display: "swap",
});
const LoginPage = () => {
  return (
    <>
      <div className="flex overflow-hidden bg-slate-900 relative items-center justify-center min-h-screen ">
        <motion.div
          animate={{ rotate: 360, translateX: [0, 50, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] absolute border-violet-500/60 border-2 bg-violet-500/5 rotate-6"
          style={{
            borderRadius: "80% 70% 60% 90%",
          }}
        ></motion.div>
        <motion.div
          animate={{ rotate: 360, translateX: [0, -50, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] absolute border-violet-300 border-2 bg-violet-300/5 rotate-12"
          style={{
            borderRadius: "90% 90% 80% 50%",
          }}
        ></motion.div>
        <motion.div
          animate={{ rotate: 360, translateY: [0, 50, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] absolute border-violet-200 border-2 bg-violet-200/5 rotate-45"
          style={{
            borderRadius: "90% 80% 80% 120%",
          }}
        ></motion.div>
        {/*second half ----------------------------------- */}
        <motion.div
          animate={{
            rotate: 360, // continuous rotation
            translateX: [0, 50, 0], // back and forth
          }}
          transition={{
            rotate: {
              duration: 5, // slow smooth rotation
              repeat: Infinity,
              ease: "linear",
            },
            translateX: {
              duration: 2, // smooth in/out
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-[500px] h-[500px] absolute border-fuchsia-500- border-2 bg-fuchsia-500/5 rotate-6"
          style={{
            borderRadius: "80% 70% 60% 90%",
          }}
        ></motion.div>

        <motion.div
          animate={{
            rotate: 360,
            translateY: [0, -50, 0],
          }}
          transition={{
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
            translateY: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-[500px] h-[500px] absolute border-fuchsia-300 border-2 bg-fuchsia-300/5 rotate-12"
          style={{
            borderRadius: "90% 90% 80% 50%",
          }}
        ></motion.div>

        <motion.div
          animate={{
            rotate: 360,
            translateY: [0, 50, 0],
          }}
          transition={{
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
            translateY: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-[500px] h-[500px] absolute border-fuchsia-200 border-2 bg-fuchsia-200/5 rotate-45"
          style={{
            borderRadius: "90% 80% 80% 120%",
          }}
        ></motion.div>
        <motion.div
          className={`w-[520px] h-[520px] shadow-2xl flex items-center justify-center flex-col shadow-violet-500 absolute rounded-full bg-slate-900 ${lobster.className}`}
          style={{
            boxShadow:
              "rgba(130, 47, 224, 0.12) 0px 1px 3px, rgba(130, 47, 224, 0.24) 0px 1px 2px;",
          }}
        >
          <form>
            <h1 className="text-3xl text-center font-bold text-violet-100">
              Sign Up
            </h1>
            <div className="flex flex-col  items-center justify-center">
              <input
                type="text"
                placeholder="Username"
                className="w-[400px] my-4 py-2 px-3 border-b-violet-400 border-b-2 placeholder:text-violet-300/70"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-[450px] py-2 my-4 px-3 border-b-violet-400 border-b-2 placeholder:text-violet-300/70"
              />
              <input
                type="text"
                placeholder="Password"
                className="w-[400px] py-2 my-4 px-3 border-b-violet-400 border-b-2 placeholder:text-violet-300/70"
              />
              <input type="text" />
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
