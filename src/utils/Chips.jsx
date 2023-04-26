export default function Chips({ skill, href, description }) {
    return (
        <a href={href} target={"_blank"} title={description} className="hover:bg-slate-600 select-none text-lg transition-all duration-200 cursor-pointer min-w-28 h-20 px-5 flex flex-col justify-center items-center rounded-lg bg-[#111827]">
            <p>{skill}</p>
        </a>
    )
}