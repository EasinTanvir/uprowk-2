import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
const About = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] pt-10">
      <div className="bg-white w-full rounded-lg shadow-lg  pt-4 pb-6 ">
        <h1 className="sm:text-4xl text-3xl font-bold italic  mb-3">
          About Bitly QuickLink
        </h1>
        <p className="text-gray-700 text-sm  mb-8 lg:w-1/2 sm:w-[80%] w-full ">
          QuickLink simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links.QuickLink simplifies
          URL shortening for efficient sharing. Easily generate, manage, and
          track your shortened links.QuickLink simplifies URL shortening for
          efficient sharing. Easily generate, manage, and track your shortened
          links.QuickLink simplifies URL shortening for efficient sharing.
          Easily generate, manage, and track your shortened links.
        </p>
        <div className="space-y-5">
          <div className="flex items-center">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold">Simple URL Shortening</h2>
              <p className="text-gray-600">
                Generate short, memorable links with ease using QuickLink’s
                intuitive interface.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold">Efficient Sharing Tools</h2>
              <p className="text-gray-600">
                Optimize your sharing strategy with QuickLink. Track clicks and
                manage your links seamlessly.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold">
                Customizable Link Management
              </h2>
              <p className="text-gray-600">
                Tailor links to fit your brand with customizable short URLs.
                Organize and edit links easily.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold">Analytics and Insights</h2>
              <p className="text-gray-600">
                Gain valuable insights into link performance with detailed
                analytics. Monitor clicks and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
