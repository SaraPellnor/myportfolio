"use client"
import { useState } from "react";
import { GiCompass } from "react-icons/gi";
import Compass from "./Compass";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Connect from "./Connect";
const Home = () => {

  const [hoverd, setHoverd] = useState("");

  return (
    <div className="flex flex-wrap w-full h-full font-400 md:text-6xl text-4xl border-solid border-[2px] border-black bg-black relative cursor-pointer">
      <Compass setHoverd={setHoverd} hoverd={hoverd} content={<GiCompass />} />
      <About setHoverd={setHoverd} hoverd={hoverd} content={"About"} />
      <Projects setHoverd={setHoverd} hoverd={hoverd} content={"Projects"} />
      <Resume setHoverd={setHoverd} hoverd={hoverd} content={"Resume"} />
      <Connect setHoverd={setHoverd} hoverd={hoverd} content={"Connect"} />
    </div>
  );
};

export default Home;