import { useRef, useState, useEffect } from "react"
import { ShowErrorToast, ShowToast } from "@/utils/Toast";
import ReactMarkdown from "react-markdown";

async function getRes(prompt) {
    console.log(prompt)
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOMEPAGE}/api/palm?prompt=${prompt}`, {
        method: "POST",
    }).then(res => res.json())
    return res
}

export default function PalmChat({ setPalm }) {
    const palmChat = useRef()
    const [messages, setMessages] = useState([])
    const input = '# This is a header\n\nAnd this is a paragraph'


    function sendMsg() {
        getRes(palmChat.current.value).then(res => {
            setMessages([...messages, { message: palmChat.current.value, response: res.response }])
        })
    }

    useEffect(() => {
        try {
            if (document.getElementById("palmScreen") && messages.length > 0) {
                document.getElementById("palmScreen").scrollTop = document.getElementById("palmScreen").scrollHeight
            }
        } catch (err) {
            console.log(err.message)
            ShowErrorToast({ text: "Error scrolling to bottom\nerr.message" })
        }
    }, [messages.length])

    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <span data-aos="fade-left" className="text-5xl inline-flex">
                <svg onClick={() => setPalm(false)} xmlns="http://www.w3.org/2000/svg" className="h-10 mx-5 w-10 cursor-pointer" fill="none" viewBox="0 -2 24 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Chat with Palm AI by Google!
            </span>
            <div id="palmScreen" className=" my-10 p-3 overflow-y-scroll bg-[#111827] h-full rounded w-full">
                {messages.length > 0 ? messages.map((item, index) => {
                    return (
                        <div key={index} id="md-chat" className=" hover:bg-slate-600 text-lg transition-all duration-200 cursor-pointer min-w-28 mb-5 h-18 p-5 flex flex-col  rounded-lg bg-[#111827] justify-start items-start">
                            <p className="text-[0.8rem]">
                                <ReactMarkdown>
                                    {item.response}
                                </ReactMarkdown>
                            </p>
                        </div>
                    )
                }) : <div className="text-xl transition-all duration-200 cursor-pointer min-w-28 mb-5 h-full px-5 flex  rounded-lg bg-[#111827] justify-center items-center">
                    <p className="text-[1.1rem]">Type below to chat with PaLM AI.</p>
                </div>}

            </div>
            <div className="flex flex-row h-fit mb-5 justify-between items-center w-full">
                <button onClick={() => {
                    setMessages([])
                }}
                    className="w-[full] h-12 rounded-lg bg-[#111827] text-white p-3">Reset</button>
                <input ref={palmChat} className="w-[90%] mx-3 h-12 rounded-lg bg-[#111827] text-white p-3" placeholder="Type a message" />
                <button onClick={() => {
                    if (palmChat.current.value.length > 0) {
                        sendMsg(palmChat.current.value)
                        palmChat.current.value = ""
                        ShowToast({ text: "Message sent" })
                    }
                    else ShowErrorToast({ text: "Please fill in all fields" })
                }} className="w-[full] h-12 rounded-lg bg-[#111827] text-white p-3">Send</button>
            </div>
        </div>
    )
}