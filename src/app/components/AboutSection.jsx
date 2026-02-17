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
        <li>Product Management, Roadmap & Backlog management</li>
        <li>Mobile & Web Development, AI Integration</li>
        <li>Google Vision API, Openai API, DeepSeek API</li>
        <li>VS Code, Cursor AI, Claude Code, Make</li>
        <li>App Store Connect, Google Play Console, Netlify, Vercel</li>
        <li>ASO, SEO, Market Research, Design, Backlog management & Recruitment</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master in Web and Mobile Development | European University of Madrid, Spain</li>
        <li>Bachelor in Computer Engineering | Free University of Brussels</li>
        <li>Bachelor in HR Management & Statistics | Campus du CERIA of Brussels, Belgium</li>
        <li>Higher Secondary Education in Business Management & Accounting | IFM Brussels</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrum & Kanban Certification | SCRUMstudy</li>
        <li>Product Management | Udemy</li>
        <li>Master in Data Engineering | Udemy</li>
        <li>React Native & MERN Stack Certification | Udemy</li>
        <li>Version Control with Git & GitHub | Platzi</li>
        <li>Basic Software Design & Development | Platzi</li>
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
          src="/images/aboutt.jpg"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-4">
            I’m a multilingual <strong>Product Manager & Product Owner</strong> with a strong technical background, experienced in building <strong>Data, AI, SaaS, and Mobile products</strong> across both B2B and B2C environments. I lead full product lifecycles end-to-end from problem discovery and market research to roadmap definition, delivery, launch, and iteration always focusing on measurable impact and user value.
          </p>
          <p className="text-base lg:text-lg mb-4">
            With a foundation in <strong>software and data engineering</strong>, I collaborate closely with technical teams to translate business needs into scalable solutions, balancing product vision with execution constraints. My experience spans AI-powered systems, data platforms, internal automation tools, and mobile applications designed for operational efficiency and growth.
          </p>
          <p className="text-base lg:text-lg mb-4">
            I hold a Master’s in Web and Mobile Development and certifications in <strong>Product Management, Scrum, and Kanban</strong>, supporting a structured and outcome driven approach to product delivery.
          </p>
          <p className="text-base lg:text-lg mb-4">
            Fluent in <span className="font-semibold">French, English, and Spanish</span>, I’ve worked across Switzerland, Belgium, France, and Spain, strengthening my ability to operate in international environments and align cross-functional teams around shared goals.
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
