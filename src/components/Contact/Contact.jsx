import Chips from "@/utils/Chips"

export default function ContactContent() {
    return(
        <div className="flex flex-col justify-start overflow-hidden items-start h-full max-sm:h-screen max-sm:overflow-y-visible">
            <h1 data-aos="fade-left" className="text-5xl">Contact</h1>
            <div data-aos="fade-left" className="my-10 w-full">
                <Chips skill={"Send me an email!"} description={"redskull@duck.com"} href={"mailto:redskull@duck.com"}/>
            </div>
            <h1 data-aos="fade-left" className="text-5xl">Support</h1>
            <div data-aos="fade-left" className="my-10 flex flex-col gap-5 w-full">
                <Chips skill={"Buy Me a Coffee!"} href={"https://www.buymeacoffee.com/meertarbani"}/>
                <Chips skill={"Support me through Stripe!"} href={"https://github.com/sponsors/Redskull-127?o=esc"}/>
            </div>
        </div>
    )
}