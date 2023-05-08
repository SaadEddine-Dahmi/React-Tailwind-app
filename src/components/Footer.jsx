import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
// import { HeroIconArrowUp } from 'react-heroicons';
import ArrowUp from "../assests/up-arrow.png";
function Hover(e) {
  e.target.style.setProperty("transition", "duration-300ms ease-in-out");
  e.target.classList.add("hover:scale-110");
}

const ScrollToTopButton = () => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollToTopButton(true);
    } else {
      setShowScrollToTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-10">
      {showScrollToTopButton && (
        <img
          className="w-8 z-50"
          onClick={handleScrollToTop}
          src={ArrowUp}
          alt="#"
        />
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <ScrollToTopButton />
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between my-6">
          <a href="http://facebook.com">
            <FaFacebook
              className="text-emerald-500"
              onMouseOver={Hover}
              size={30}
            />
          </a>
          <a href="http://instagram.com">
            <FaInstagram
              className="text-emerald-500"
              onMouseOver={Hover}
              size={30}
            />
          </a>
          <a href="http://twitter.com">
            <FaTwitter
              className="text-emerald-500"
              onMouseOver={Hover}
              size={30}
            />
          </a>
          <a href="http://whatsapp.com">
            <FaWhatsapp
              className="text-emerald-500"
              onMouseOver={Hover}
              size={30}
            />
          </a>
          <a href="http://github.com">
            <FaGithub
              className="text-emerald-500"
              onMouseOver={Hover}
              size={30}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between lg:col-span-2 mt-8 mx-6">
        <div>
          <h6 className="font-medium">Solutions</h6>
          <ul>
            <li className="py-2 font-light">Analytics</li>
            <li className="py-2 font-light">Marketing</li>
            <li className="py-2 font-light">Commerce</li>
            <li className="py-2 font-light">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium ">Support</h6>
          <ul>
            <li className="py-2 font-light">Pricing</li>
            <li className="py-2 font-light">Documentation</li>
            <li className="py-2 font-light">Guides</li>
            <li className="py-2 font-light">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Company</h6>
          <ul>
            <li className="py-2 font-light">About</li>
            <li className="py-2 font-light">Blog</li>
            <li className="py-2 font-light">Jobs</li>
            <li className="py-2 font-light">Press</li>
            <li className="py-2 font-light">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Legal</h6>
          <ul>
            <li className="py-2 font-light">Claim</li>
            <li className="py-2 font-light">Policy</li>
            <li className="py-2 font-light">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
