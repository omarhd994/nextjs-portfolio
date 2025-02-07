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
    const response = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_USER_ID,
        template_params: data,
      }),
    });

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
  <strong>Motivated tech enthusiast</strong>, deeply passionate about SaaS, Web, and Mobile development, as well as product management.
</p>
<p className="text-[#ADB7BE] mb-4 max-w-md">
  Always exploring the latest trends like AI, Automation, and beyond..
</p>
<p className="text-[#ADB7BE] mb-4 max-w-md">
  Always open to new challenges and opportunities. Let’s connect and create something meaningful together!
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
                placeholder="Topic"
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
                placeholder="Tell me what you're reaching out for"
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
