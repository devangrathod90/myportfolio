import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import cofoundify1 from "@/assets/coFoundify/cofoundify1.png"
import cofoundify2 from "@/assets/coFoundify/cofoundify2.png"
import cofoundify3 from "@/assets/coFoundify/cofoundify3.png"
import cofoundify4 from "@/assets/coFoundify/cofoundify4.png"
import paste2 from "@/assets/pastes/paste2.png"
import paste3 from "@/assets/pastes/paste3.png"
import paste4 from "@/assets/pastes/paste4.png"
import vatavaran1 from "@/assets/vatavaran/vatavaran1.png"
import vatavaran2 from "@/assets/vatavaran/vatavaran2.png"
import vatavaran3 from "@/assets/vatavaran/vatavaran3.png"
import vatavaran4 from "@/assets/vatavaran/vatavaran4.png"

const data = [
  {
    "title": "Cofoundify",
    "content": {
      "description": "A platform that connects entrepreneurs, fostering collaboration and idea sharing.",
      "additionalDesc":"",
      "images": [
        cofoundify1,
        cofoundify2,
        cofoundify3,
        cofoundify4
      ]
    }
  },
  {
    "title": "Vatavaran",
    "content": {
      "description": "An application that displays the current temperature and weather conditions of a user-specified city.",
      "images": [
        vatavaran1,
        vatavaran2,
        vatavaran3,
        vatavaran4,
      ]
    }
  },
  {
    "title": "Paste App",
    "content": {
      "description": "A application design to manage and store the coding problems or daily tasks .it allows users to create and manage daily and custom pastes lists.",
      "updates": [
        "✅ Store coding problems or daily tasks",
        "✅ Create new paste",
        "✅ Delete the paste",
        "✅ Edit existing paste",
        "✅ You can share your pastes with friends"
      ],
      "images": [
        paste2,
        paste3,
        paste4,
      ]
    }
  }
]


const Projects = () => {
  return (
    <div id="projects" className="w-auto ">
      <Timeline
        data={data.map((item) => ({
          title: item.title,
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-normal mb-4">
                {item.content.description}
              </p>
              {item.content && (
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                  {item.content.additionalDesc}
                </p>
              )}
              {item.content.updates && (
                <div className="mb-4">
                  {item.content.updates.map((update, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
                    >
                      {update}
                    </div>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                {item.content.images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                ))}
              </div>
            </div>
          )
        }))}
      />
    </div>
  );
};

export default Projects;
