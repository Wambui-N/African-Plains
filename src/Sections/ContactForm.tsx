"use client"; // This tells Next.js that this is a client component

import Button from "@/components/Button";
import React, { FormEvent } from "react";

const ContactForm: React.FC = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData.entries()); // Extract the form data
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully:", result);
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  }

  return (
    <div className="responsive section py-6">
      <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row w-full justify-between gap-12">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs capitalize" htmlFor="first name">
              First Name
            </label>
            <input
              className="w-full border-b border-brown/40 px-4 bg-white"
              type="text"
              name="first name"
              placeholder="John"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs capitalize" htmlFor="last name">
              Last Name
            </label>
            <input
              className="w-full border-b border-brown/40 px-4 bg-white"
              type="text"
              name="last name"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-between gap-12">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs capitalize" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border-b border-brown/40 px-4 bg-white"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs capitalize" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full border-b border-brown/40 px-4 bg-white"
              type="text"
              name="subject"
              placeholder=" "
              required
            />
          </div>
        </div>
        <textarea
          className="w-full border border-brown/40 rounded bg-white p-4"
          rows={5}
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <div className="w-full flex items-center justify-center">
          <Button
            buttonStyle="bg-yellow capitalize text-brown"
            title="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
