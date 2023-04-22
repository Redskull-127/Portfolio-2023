import { useState, useEffect } from "react";
import Link from "next/link";
import Chips from "@/utils/Chips";

export default function LatestContent() {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/redskull-127/repos")
            .then(res => res.json())
            .then(data => {
                // set the latest repos first
                data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setLatest(data);
            })
    }, []);
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Latest</h1>
            <p data-aos="fade-left" className="mt-5 text-lg">
                ~ Latest Events
            </p>
            <ul data-aos="fade-left">
                <ul>
                    <li className="overflow-y-auto w-full my-4 flex flex-col gap-1">
                    <Link href='https://gdscwowgujarat.app' target={"_blank"} className="cursor-pointer hover:text-gray-400 transition-all duration-300" >
                        <p>GDSC WoW Gujarat - Google</p>
                    </Link>
                    </li>
                </ul>
            </ul>
            <p data-aos="fade-left" className="mt-5 text-lg">
                ~ Here are some of my latest projects:
            </p>
            <div data-aos="fade-left" className="grid grid-cols-4 gap-3 my-5 overflow-y-auto text-center">
                {latest && latest.map((repo, index) => (
                    // <Link href={repo.svn_url} target={"_blank"} className="cursor-pointer hover:text-gray-400 transition-all duration-300" key={index}>
                    //     <p>{repo.name}</p>
                    // </Link>
                    <Chips key={index} href={repo.svn_url} skill={repo.name}/>
                ))}
                {latest.length === 0 && <p>Loading...</p>}
            </div>
        </div>
    )
}