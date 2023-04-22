export default function HomeScreen() {
    return(
        <div className="w-[70%] pt-40 px-24 flex flex-col justify-start items-start h-full">
        <h1 className="text-5xl">Meer Tarbani</h1>
        <p className="mt-5">
          Hey, I&apos;m Meer. GDSC Lead at Silver Oak University | Organizer of
          GDSC WoW Gujarat. <br /> Ex Flipkart SCOA Intern & Gao Tech Support
          Intern!
        </p>
        <div className="mt-10 flex gap-10 items-center">
          <div className=" rounded-full w-[150px] h-[150px] bg-[url(/Images/meer.jpg)] bg-cover"></div>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="text-lg cursor-pointer hover:text-gray-400 transition-all duration-300">
              <p>Linkedin</p>
            </li>
            <li className="text-lg cursor-pointer hover:text-gray-400 transition-all duration-300">
              <p>GitHub</p>
            </li>
            <li className="text-lg cursor-pointer hover:text-gray-400 transition-all duration-300">
              <p>Twitter</p>
            </li>
          </ul>
        </div>
      </div>
    )
}