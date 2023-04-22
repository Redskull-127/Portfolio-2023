import { useState, useEffect } from "react";
import Link from "next/link";

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
            <h1 className="text-5xl">Latest</h1>
            <p className="mt-5 text-lg">
                ~ Latest Events
            </p>
            <ul>
                <ul>
                    <li className="overflow-y-auto w-full my-4 flex flex-col gap-1">
                    <Link href='https://gdscwowgujarat.app' target={"_blank"} className="cursor-pointer hover:text-gray-400 transition-all duration-300" >
                        <p>GDSC WoW Gujarat - Google</p>
                    </Link>
                    </li>
                </ul>
            </ul>
            <p className="mt-5 text-lg">
                ~ Here are some of my latest projects:
            </p>
            <ul className="overflow-y-scroll w-full my-4 flex flex-col gap-1">
                {latest && latest.map((repo, index) => (
                    <Link href={repo.svn_url} target={"_blank"} className="cursor-pointer hover:text-gray-400 transition-all duration-300" key={index}>
                        <p>{repo.name}</p>
                    </Link>
                ))}
                {latest.length === 0 && <p>Loading...</p>}
            </ul>
        </div>
    )
}