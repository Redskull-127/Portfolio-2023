import Chips from "@/utils/Chips"
import { BlogData } from "@/CustomData/Data"

export default function BlogContent() {
    const blogs = BlogData()
    return(
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Blog</h1>
            <div data-aos="fade-left" className="my-10 flex flex-col gap-3 overflow-x-hidden overflow-y-auto w-full">
                {blogs.length > 0 && blogs.map((data, index) => {
                    return <Chips key={index} skill={data.title} href={data.link} description={data.description} />
                })}
            </div>
        </div>
    )
}