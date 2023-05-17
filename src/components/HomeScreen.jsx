import {
  Arrow, GitHubIcon, TwitterIcon, LinkedinIcon
} from "../utils/Icons"
import { useEffect, useState } from "react";

async function getTwitterData(url) {
  const twitterData = await fetch(
    `${url}/api/twitter`
  ).then((res) => res.json());
  return twitterData;
}

async function getGithubData(url) {
  const githubData = await fetch(
    `${url}/api/github`
  ).then((res) => res.json());
  return githubData;
}

export default function HomeScreen() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setData({
        twitter: await getTwitterData(`${process.env.NEXT_PUBLIC_HOMEPAGE}`),
        github: await getGithubData(`${process.env.NEXT_PUBLIC_HOMEPAGE}`),
      });
    }
    fetchData();
  }, []);
  return (
    <div data-aos="fade-left" className="w-[70%] flex flex-col justify-start items-start h-full">
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
            {data.github && data.github.data?.length != undefined ? `${data.github.data.length} repos` : 'Open'} GitHub
            <Arrow />
          </a>
          <a href="https://twitter.com/meertarbani" target={"_blank"} className="text-lg flex gap-2 cursor-pointer hover:text-gray-400 transition-all duration-300">
            <TwitterIcon />
            {data.twitter && data.twitter?.data[0].statuses_count} tweets on Twitter
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
