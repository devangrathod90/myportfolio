"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useToast } from "@/hooks/use-toast"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import facebook from "@/assets/facebook.png";
import github from "@/assets/github.png";
import insatgram from "@/assets/instagram.png";
import youtube from "@/assets/youtube.png";
import linkedin from "@/assets/linkedin.png";


const people = [
  {
    id: 1,
    name: "Github",
    designation: "devangrathod90",
    image: github,
  },
  {
    id: 2,
    name: "insatgram",
    designation: "devangrathod",
    image:
    insatgram,
  },
  {
    id: 3,
    name: "youtube",
    designation: "Devangrathod90",
    image:youtube,
  },
  {
    id:4,
    name: "linkedin",
    designation: "Devangrathod90",
    image:
    linkedin,
  },
  {
    id: 5,
    name: "facebook",
    designation: "Devangrathod",
    image:
    facebook,
  },
  
];

 

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    setTimeout(() => {
      toast({
        title: "Form submitted",
        description: `${formData.fullName} ${formData.email} ${formData.message}`,
      })
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

    }, 3000);
  }



  return (
    <div id='contact'>
      <BackgroundBeamsWithCollision className=" min-h-screen max-md:h-auto pt-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 p-10 flex items-center justify-center ">
        <div className=" pt-8 w-full max-w-3xl space-y-8 z-10">

          <div className="text-center pb-1">
            <h1 className="text-5xl font-extrabold  font-ubuntu tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
              Contact Us
            </h1>
            <hr className="w-44 h-1 bg-indigo-500 border-t-0 mx-auto my-2 transform transition-all duration-500 ease-out hover:scale-110" />
          </div>

          <div className="flex justify-center items-center text-center my-5 space-y-4">
            <p className="max-w-2xl text-xl leading-relaxed text-gray-300  animate-fadeIn">
              I excited to hear from you! Reach out to me through the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative flex flex-col items-center justify-center   bg-transparent rounded-lg">

            <div className="w-full space-y-6 relative">


              <div className="group w-full">
                <label
                  htmlFor="fullName"
                  className="left-4 top-4 group-focus-within:text-indigo-500 transition-all duration-300 ease-in-out"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-4 text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-transparent group-focus-within:border-indigo-500 transition-all duration-300 ease-in-out"
                  placeholder="Name"
                />
              </div>


              <div className="group w-full">
                <label
                  htmlFor="email"
                  className="left-4 top-4 text-gray-300 group-focus-within:text-indigo-500 transition-all duration-300 ease-in-out"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-transparent group-focus-within:border-indigo-500 transition-all duration-300 ease-in-out"
                  placeholder="Email"
                />
              </div>


              <div className="group w-full">
                <label
                  htmlFor="message"
                  className="left-4 top-4 text-gray-300 group-focus-within:text-indigo-500 transition-all duration-300 ease-in-out"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-transparent group-focus-within:border-indigo-500 transition-all duration-300 ease-in-out"
                  rows={5}
                  placeholder="Message"
                />
              </div>


              <div className="text-center w-full mt-6">
                <button
                  type="submit"
                  className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="flex item-center justify-center p-7 pb-7 mb-6 gap-3 hover:scale-110">

        <AnimatedTooltip  items={people} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>

  );
}
