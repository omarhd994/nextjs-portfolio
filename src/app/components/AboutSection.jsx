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
        <li>LLMs, AI Agents, RAG Pipelines & Natural Language Processing (NLP)</li>
        <li>Python, JavaScript, React, React Native, Node.js & SQL</li>
        <li>LangChain, LangGraph, Pinecone, ChromaDB, PySpark, Pandas</li>
        <li>OpenAI, Gemini, Hugging Face, OpenCode & Claude Code</li>
        <li>VS Code, Claude Code, Open Code, Git, Make, Vercel & Netlify</li>
        <li>Product Strategy, UI/UX, Cloud, App Store Connect, Google Play Console</li>
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
        <li>Associate AI Engineer | DataCamp</li>
        <li>Master in Data Engineering | Udemy</li>
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
            I’m a multilingual <strong>AI Engineer & Product Builder</strong> specializing in designing, building, and deploying <strong>LLM-powered applications, AI agents, NLP systems, and SaaS products</strong>. I combine software engineering, AI, and product thinking to transform complex business problems into scalable, production-ready solutions with measurable business impact.
          </p>

          <p className="text-base lg:text-lg mb-4">
            My experience spans <strong>Generative AI, Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG), vector databases, AI orchestration, data platforms, and full-stack development</strong>. I build end-to-end AI systems, from document ingestion and semantic retrieval to AI agents, backend services, mobile applications, and intuitive user experiences.
          </p>

          <p className="text-base lg:text-lg mb-4">
            I hold a Master’s in Web and Mobile Development and certifications in <strong>AI Engineering, Software, Data, and Product Management</strong>, enabling me to bridge business strategy with technical execution and deliver user-centric AI products.
          </p>

          <p className="text-base lg:text-lg mb-4">
            Fluent in <span className="font-semibold">French, English, and Spanish</span>, I’ve worked across Switzerland, Belgium, France, and Spain, collaborating with international and cross-functional teams to deliver innovative AI and software solutions.
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
