"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      from_name: e.target.subject.value,  // You can map your form fields to match the template placeholders
      to_name: "Omar Haddia",  // This is the recipient's name, which can be dynamic or static
      subject: e.target.subject.value,
      message: e.target.message.value,
      email: e.target.email.value,
    };

    // Call the EmailJS API to send the email
    try {
      const response = await fetch(
        `https://api.emailjs.com/api/v1.0/email/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_6gg7469",
            template_id: "template_ng0lr5i",
            user_id: "hLv4Z6yOmS9fRGkKJ",
            template_params: data,
          }),
        }
      );

      if (response.ok) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      } else {
        throw new Error("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
      <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I’m a Full Stack and React Native Developer passionate about creating impactful products. With experience leading projects from idea to launch, I focus on deployment and user feedback.
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          My background in HR, IT, and a Master’s in Software Development has shaped my strong problem-solving skills. I thrive in both team and independent settings.
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        Having worked in the Swiss, Belgian, Spanish, and French markets, I’m fluent in English, French, and Spanish, with an intermediate level in Dutch and German, which has strengthened my collaboration and communication skills.
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/omarhd994">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/omar-haddia/">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>

      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="mail@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
