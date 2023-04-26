import Chips from "@/utils/Chips"

export default function ContactContent() {
    return(
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Contact</h1>
            <div data-aos="fade-left" className="my-10 w-full">
                <Chips skill={"Send me an email!\nredskull@duck.com"} href={"mailto:redskull@duck.com"}/>
            </div>
        </div>
    )
}