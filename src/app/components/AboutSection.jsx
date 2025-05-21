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
        <li>Python, SQL, PySpark, Azure, Data Factory, Databricks, Synapse, Git/GitHub</li>
        <li>Shell, React, React Native, Next.js, JavaScript, Node.js</li>
        <li>HTML, CSS, Tailwind, Nativewind</li>
        <li>Google Vision API, GPT API Integration, DeepSeek API</li>
        <li>VS Code, Cursor AI, Make</li>
        <li>Netlify, Vercel, Google Play Store (Deployment)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Engineer Bootcamp | Udemy - Online Learning Platform</li>
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
        <li>Data Engineer Bootcamp | Udemy - Online Learning Platform</li>
        <li>Product Management & Agile Methodologies | Udemy</li>
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
    src="/images/setup.jpg" 
    width={500} 
    height={500} 
    className="rounded-lg shadow-lg" 
  />
  <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
  I’m a multilingual tech enthusiast with experience in building data pipelines, software solutions, and full-stack applications from ideation to deployment.
</p>
<br/>
<p className="text-base lg:text-lg">
  I hold a Master’s in Web and Mobile Development and completed a Data Engineering Bootcamp focused on the Data Engineering fundamentals, SQL, Python, Cloud, Airflow and PySpark.
</p>
<br/>
<p className="text-base lg:text-lg">
  My background in talent management has enhanced my ability to align technical solutions with business needs and collaborate across cross-functional teams.
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
