export default function Chips({ skill, href }) {
    return (
        <a data-aos="fade-down" href={href} target={"_blank"} className="hover:bg-slate-600 select-none text-lg transition-all duration-200 cursor-pointer min-w-28 h-20 px-5 flex justify-center items-center rounded-lg bg-[#111827]">
            <p>{skill}</p>
        </a>
    )
}