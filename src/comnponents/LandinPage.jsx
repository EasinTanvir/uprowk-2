import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

let desc =
  "Generate short, memorable links with ease using QuickLink’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with QuickLink. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using QuickLink’s intuitive interface. Share URLs effortlessly across platforms.";

const LandinPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    py-5    lg:gap-10 gap-16 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full sm:w-[70%] w-full"
          >
            QuickLink Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            QuickLink streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            QuickLink allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with QuickLink today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-custom-gradient hover:text-slate-300 w-40 text-white rounded-md  py-2"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-btnColor border w-40 text-btnColor rounded-md  py-2 "
            >
              Create Short Link
            </motion.button>
          </div>
        </div>
        <div className="   flex-1 flex lg:justify-center sm:justify-start justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png"
            alt=""
          />
        </div>
      </div>

      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-900 font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Trusted by individuals and teams at the word best companies{" "}
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card title="Simple URL Shortening" desc={desc} />
          <Card title="Efficient Sharing Tools" desc={desc} />
          <Card title="Customizable Link" desc={desc} />
          <Card title="Analytics and Insights" desc={desc} />
        </div>
      </div>
    </div>
  );
};

export default LandinPage;
