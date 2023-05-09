import Chips from "@/utils/Chips";
import { Skillset } from "@/CustomData/Data";

document.title = "Skills | Meer Tarbani's Portfolio"
const SkillsContent = () => {
  const skills = Skillset();
  return (
    <div className="flex overflow-hidden flex-col justify-start items-start h-full">
      <h1 data-aos="fade-left" className="text-5xl">Skills</h1>
      <p data-aos="fade-left" className="mt-5 w-[80%]">
        Meer Tarbani is a talented and skilled individual with a wide range of abilities. He is proficient in a variety of programming languages, including Python, JavaScript, and C++. He is also an expert in web development and has developed several projects, including CY-BOCK, Equisito, and Voice-GPT. In addition, he is a strong leader and has experience in managing teams and projects. Here are some skills:
      </p>
      {/* <ul className="my-4 flex flex-col gap-1">
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>Python</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>JavaScript</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>C++</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>React.js\Next/js</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>Node.js</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>Express.js</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>HTML\CSS</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>CI\CD Pipelines</p>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-all duration-300">
          <p>Git</p>
        </li>
      </ul> */}
      <div data-aos="fade-left" className="grid grid-cols-4 gap-3 my-5">
      {skills && skills.map((skill, key) => (
        <Chips key={key} skill={skill.name}/>
      ))}
      </div>
      <p>~ Google Bard</p>
    </div>
  );
};

export default SkillsContent;