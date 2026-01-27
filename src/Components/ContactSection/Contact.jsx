import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-5 lg:px-20 flex justify-center items-center"
    >
      <div className="max-w-6xl w-full flex flex-col gap-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-3">
            Contact Me
          </h2>
          <p className="text-gray-400 w-full flex justify-center">
            Feel free to reach out for collaborations, opportunities, or just a
            quick chat.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Info */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <span className="text-gray-300">shashavali9100@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <span className="text-gray-300">+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span className="text-gray-300">India</span>
            </div>

            {/* Socials */}
            <div className="flex gap-6 mt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form className="flex flex-col gap-5 w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-blue-500 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-blue-500 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
