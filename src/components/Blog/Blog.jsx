import Chips from "@/utils/Chips"
import { getRemoteConfigValue } from "@/Firebase/remoteConfig"
import { useEffect, useState } from "react"

export default function BlogContent() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const getBlogs = async () => {
            const data = await getRemoteConfigValue({ key: "Blog_Data" })
            setBlogs(data)
        }
        getBlogs()
        return () => {
            setBlogs([])
        }
    }, [])
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Blog</h1>
            <div data-aos="fade-left" className="my-10 flex flex-col gap-3 overflow-x-hidden overflow-y-auto w-full">
                {blogs.length > 0 ? blogs.map((data, index) => {
                    return <Chips key={index} skill={data.title} href={data.link} description={data.description} />
                }) : <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>}
            </div>
        </div>
    )
}