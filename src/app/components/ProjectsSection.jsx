"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mechanic AI Web Application 🔧",
    description: "AI-powered Mechanical Assistant 🧑‍🔧 for diagnosing car and mechanical issues from photos and text.",
    image: "/images/projects/mechanicapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "https://iautofix.com/",
  },
  {
    id: 2,
    title: "Maternity Mobile App for New Parents 🤰",
    description: "Maternity App for new parents 🤱 with advice, follow-up, and 24/7 chatbot support 💬.",
    image: "/images/projects/mobileappbabycare.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "https://play.google.com/store/apps/details?id=com.tuempresa.pregnanttt",
  },
  {
    id: 3,
    title: "Daily Text Assistant Web App 💻",
    description: "Boosting productivity and saving time with efficient task management 📝",
    image: "/images/projects/dailytask3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "https://dictadaily.iautofix.com/en/ai-ask-me-assistant",
  },
  {
    id: 4,
    title: "Real-Time Crypto Price Tracker 📈",
    description: "Track live cryptocurrency prices 💱 with up-to-the-minute updates 🪙.",
    image: "/images/projects/cryptoappp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "https://crypto-exchange-dev.netlify.app/",
  },
  {
    id: 5,
    title: "Mental Ease: Anxiety Relief App 🌿",
    description: "Manage stress and find calm with relaxation 🌙, mindfulness, and support 🧘 anytime.",
    image: "/images/projects/mentalappfull.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Trending Movies & Series Web App 🍿",
    description: "Explore the latest trending movies and series 🎬📺 with up-to-date information and recommendations.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "https://movie-app-sigma-ruddy.vercel.app/",
  },
  {
    id: 7,
    title: "Blog of Maternity Tips & Information 👶",
    description: "Helpful maternity tips and guides, with 3 posts a week, automated with AI to support parents 👩‍👧‍👦.",
    image: "/images/projects/babycareblog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "https://babycare-app.genioweb.es/",
  },
  {
    id: 8,
    title: "AI News Automated Blog 🤖",
    description: "Get the latest AI news and trends, with automated updates and insights 📰💡.",
    image: "/images/projects/ainews.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "https://ia-futuro-inteligencia-artificial.genioweb.es/",
  },
  {
    id: 9,
    title: "BabyCare App Landing Page 🏷️",
    description: "Landing page of my mobile app explaining the different features and presenting the app 📱.",
    image: "/images/projects/babycarewebapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/omarhd994",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
