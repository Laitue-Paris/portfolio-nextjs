import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">


      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Êtes-vous prêt pour un <span className="text-purple">nouveau projet ?</span>  
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi afin qu'on mette en ligne votre site ou application dès demain
        </p>
        <a href="mailto:contact@xavierbahegne.com">
          <MagicButton
            title="Prenez contact"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Xavier Bahegne
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
            <a
              href={info.url}
              target={"_blank"}
            >

              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;