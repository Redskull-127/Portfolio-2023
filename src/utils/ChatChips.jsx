export default function ChatChips({ Name, Description, Emojie, Time }) {
    return (
        <a className="hover:bg-slate-600 select-none text-lg transition-all duration-200 cursor-pointer min-w-28 mb-5 h-18 px-5 flex flex-col justify-center items-start rounded-lg bg-[#111827]">
            <p>{Emojie + " "}{Name}</p>
            <p className="text-[0.8rem]">{Description} - {Time}</p>
        </a>
    )
}