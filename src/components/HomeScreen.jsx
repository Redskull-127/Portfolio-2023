export default function HomeScreen() {
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
          <a href="https://www.linkedin.com/in/meer-tarbani-225243216/" target={"_blank"} className="text-lg flex gap-1 cursor-pointer hover:text-gray-400 transition-all duration-300">
            Linkedin
            <svg width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#ffffff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
              <g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8" /> <path stroke-linecap="round" d="M19 5l-1 1" /> <path d="M18 6L5 19" /> </g>
            </svg>
          </a>
          <a href="https://github.com/redskull-127" target={"_blank"} className="text-lg flex gap-1 cursor-pointer hover:text-gray-400 transition-all duration-300">
            GitHub
            <svg width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#ffffff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
              <g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8" /> <path stroke-linecap="round" d="M19 5l-1 1" /> <path d="M18 6L5 19" /> </g>
            </svg>
          </a>
          <a href="https://twitter.com/meertarbani" target={"_blank"} className="text-lg flex gap-1 cursor-pointer hover:text-gray-400 transition-all duration-300">
            Twitter
            <svg width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#ffffff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
              <g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8" /> <path stroke-linecap="round" d="M19 5l-1 1" /> <path d="M18 6L5 19" /> </g>
            </svg>
          </a>
        </ul>
      </div>
    </div>
  )
}