"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React, React Native, Next.js, Figma (UI/UX Design)</li>
        <li>Tailwind, Nativewind, CSS, HTML</li>
        <li>WordPress, Google Search Console, SEO Optimization</li>
        <li>Vercel, Netlify, Google Play Store (Deployment)</li>
        <li>Product Lifecycle Management</li>
        <li>VS Code, v0, Cursor AI, AI APIs Integration</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master in Web and Mobile Development | European University of Madrid, Spain</li>
        <li>Bachelor in HR Management & Statistics | Campus du CERIA of Brussels, Belgium</li>
        <li>Bachelor in Computer Engineering | Free University of Brussels, Belgium</li>
        <li>Higher Secondary Education in Business Management & Accounting | IFM Brussels, Belgium</li>
      </ul>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN Full Stack Course | Udemy</li>
        <li>Product Management & Agile Methodologies | Udemy</li>
        <li>Back-end Course: Node.js, REST API & Express.js | Platzi</li>
        <li>Version Control Course: Git & Github | Platzi</li>
        <li>Basic web design & development Course | Platzi</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
  <Image 
    src="/images/setup.jpg" 
    width={500} 
    height={500} 
    className="rounded-lg shadow-lg" 
  />
  <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
  I’m a multilingual tech enthusiast with experience in mobile and web development, leading applications from ideation and MVP design to launch.
</p>
<br/>
<p className="text-base lg:text-lg">
  I hold a Master’s in Web and Mobile Development and am currently completing a Product Management certification.
</p>
<br/>
<p className="text-base lg:text-lg">
  My background in talent management has enhanced my ability to align business needs with team dynamics and drive collaboration.
</p>
<br/>
<p className="text-base lg:text-lg">
  Fluent in <span className="font-semibold">French, English, and Spanish</span>, I’ve worked across Switzerland, Belgium, France, and Spain, strengthening my communication and leadership skills.
</p>





          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
