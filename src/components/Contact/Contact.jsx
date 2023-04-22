import Chips from "@/utils/Chips"

export default function ContactContent() {
    return(
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Contact</h1>
            <div data-aos="fade-left" className="my-10 w-full">
                <Chips skill={"Send me an email!\nmeerraja17@gmail.com"} href={"mailto:meerraja17@gmail.com"}/>
            </div>
        </div>
    )
}