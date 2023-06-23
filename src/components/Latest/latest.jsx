import { useState, useEffect } from "react";
import Chips from "@/utils/Chips";
import { getRemoteConfigValue } from "@/Firebase/remoteConfig";
export default function LatestContent() {
    const [latest, setLatest] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const getEvents = async () => {
            const data = await getRemoteConfigValue({ key: "Latest_Events" })
            setEvents(data)
        }
        getEvents()
        return () => {
            setEvents([])
        }
    }, [])
    useEffect(() => {
        fetch("/api/github")
            .then(res => res.json())
            .then(async (data) => {
                try {
                    const updated = await data.data.slice(0, 4)
                    setLatest(updated);
                } catch (e) {
                    const updated = [{ name: "Rate limit exceed :(", description: "Try again later!" }]
                    setLatest(updated);
                }
            })
    }, []);
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full max-sm:h-screen max-sm:overflow-y-visible">
            <h1 data-aos="fade-left" className="text-5xl">Latest</h1>
            <p data-aos="fade-left" className="mt-5 text-lg">
                ~ Latest Events
            </p>

            <div data-aos="fade-left" className="overflow-y-auto w-full my-4 flex flex-col gap-1">
                {events.length > 0 ? events.map((event, index) => {
                    return <Chips key={index} skill={event.title} href={event.link} description={event.description} />
                }) : <div className="w-full h-24 flex flex-col justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>}
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
                {latest.length === 0 && <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>}
            </div>
        </div>
    )
}