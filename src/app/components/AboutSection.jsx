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
        <li>Mobile & Web Development, AI Integration</li>
        <li>React Native, Expo, React,, Node.js, Python, SQL, Git/GitHub, Shell, JavaScript</li>
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
        <li>Bachelor in HR Management & Statistics | Campus du CERIA of Brussels, Belgium</li>
        <li>Bachelor in Computer Engineering (Incomplete) | Free University of Brussels</li>
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
            I’m a multilingual tech enthusiast with experience in building mobile and web solutions powered by AI, managing full product lifecycles from ideation to deployment, launch, and marketing. Skilled in <strong>App Store Optimization (ASO), SEO, competitor analysis, and market research</strong>, I leverage data-driven insights to define product strategies and deliver solutions that stand out in competitive markets.
          </p>
          <p className="text-base lg:text-lg mb-4">
            I hold a Master’s in Web and Mobile Development and am certified as a <strong>Product Manager</strong>, as well as in <strong>Scrum and Kanban</strong>.
          </p>
          <p className="text-base lg:text-lg mb-4">
            My experience as a <strong>Product Manager and Talent Manager</strong> has strengthened my ability to align technical solutions with business objectives and collaborate effectively across <strong>cross-functional teams</strong>.
          </p>
          <p className="text-base lg:text-lg mb-4">
            Fluent in <span className="font-semibold">French, English, and Spanish</span>, I’ve worked across Switzerland, Belgium, France, and Spain, further developing my communication and leadership skills while building and leading IT teams across web, mobile, CMS, frontend, backend, fullstack, and data engineering roles.
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
