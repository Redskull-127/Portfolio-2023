import Chips from "@/utils/Chips"
import { BlogData } from "@/CustomData/Data"
import remoteConfig from "@/Firebase/remoteConfig"
import { useEffect, useState } from "react"
import { fetchAndActivate, getValue } from "firebase/remote-config"


export default function BlogContent() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const remote = remoteConfig()
        const getData = remote.then((remote) => {
            remote.settings.minimumFetchIntervalMillis = 3600000
            fetchAndActivate(remote).then(() => {
                const blog = getValue(remote, "Blog_Data").asString()
                const blogData = JSON.parse(blog)
                setBlogs(blogData)
            })
        })
        getData
        return () => {
            getData
        }
    }, [])
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Blog</h1>
            <div data-aos="fade-left" className="my-10 flex flex-col gap-3 overflow-x-hidden overflow-y-auto w-full">
                {blogs.length > 0 ? blogs.map((data, index) => {
                    return <Chips key={index} skill={data.title} href={data.link} description={data.description} />
                }) : <h1 className="text-2xl">Loading...</h1>}
            </div>
        </div>
    )
}