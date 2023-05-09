import { useState, useEffect } from "react";
import Link from "next/link";
import Chips from "@/utils/Chips";
import {LatestEvents} from "@/CustomData/Data";
document.title = "Latest Projects & Events | Meer Tarbani's Portfolio"
export default function LatestContent() {
    const [latest, setLatest] = useState([]);
    const [events, setEvents] = useState(LatestEvents());
    useEffect(() => {
        fetch("/api/github")
            .then(res => res.json())
            .then(async(data) => {
                try{
                    const updated = await data.data.slice(0, 4)
                    setLatest(updated);
                } catch (e) {
                    const updated = [{name: "Rate limit exceed :(", description: "Try again later!"}]
                    setLatest(updated);
                }
            })
    }, []);
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Latest</h1>
            <p data-aos="fade-left" className="mt-5 text-lg">
                ~ Latest Events
            </p>

            <div data-aos="fade-left" className="overflow-y-auto w-full my-4 flex flex-col gap-1">
                {events.length > 0 && events.map((event, index) => {
                    return <Chips key={index} skill={event.title} href={event.link} description={event.description} />
                })}
            </div>
            <p data-aos="fade-left" className="mt-5 text-lg">
                ~ Here are some of my latest projects:
            </p>
            <div data-aos="fade-left" className="flex flex-col w-full gap-3 my-5 overflow-y-auto text-center">
                {latest && latest.map((repo, index) => (
                    <div key={index}>
                        <Chips href={repo.svn_url} skill={repo.name} description={repo.description} />
                    </div>
                ))}
                {latest.length === 0 && <p>Loading...</p>}
            </div>
        </div>
    )
}