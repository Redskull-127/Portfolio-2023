import {
  Arrow, GitHubIcon, TwitterIcon, LinkedinIcon
} from "../utils/Icons"

import { useEffect, useState } from "react"

export default function HomeScreen() {
  const [countGithub, setCountGithub] = useState(0)
  useEffect(() => {
    fetch("/api/github")
      .then(res => res.json())
      .then(data => {
        setCountGithub(data.data.length)
      })
  }, [])
  return (
    <div data-aos="fade-left" className="w-[70%] pt-40 px-24 flex flex-col justify-start items-start h-full">
      <h1 className="text-5xl">Meer Tarbani</h1>
      <p className="mt-5">
        Hey, I&apos;m Meer. GDSC Lead at Silver Oak University | Organizer of
        GDSC WoW Gujarat. <br /> Ex Flipkart SCOA Intern & Gao Tech Support
        Intern!
      </p>
      <div className="mt-10 flex gap-10 items-center">
        <div className=" rounded-full w-[150px] h-[150px] bg-[url(/Images/meer.jpg)] bg-cover"></div>
        <ul className="flex flex-col gap-2 text-gray-500">
          <a href="https://www.linkedin.com/in/meer-tarbani-225243216/" target={"_blank"} className="text-lg flex gap-2 cursor-pointer hover:text-gray-400 transition-all duration-300">
            <LinkedinIcon />
            Linkedin
            <Arrow />
          </a>
          <a href="https://github.com/redskull-127" target={"_blank"} className="text-lg flex gap-2 cursor-pointer hover:text-gray-400 transition-all duration-300">
            <GitHubIcon />
            {countGithub + " repos"} GitHub
            <Arrow />
          </a>
          <a href="https://twitter.com/meertarbani" target={"_blank"} className="text-lg flex gap-2 cursor-pointer hover:text-gray-400 transition-all duration-300">
            <TwitterIcon />
            Twitter
            <Arrow />
          </a>
        </ul>
      </div>
      <p className="my-5">
        I love creating WebApps using ReactJs/NextJs!
      </p>
    </div>
  )
}