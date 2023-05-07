import ChatChips from "@/utils/ChatChips"
import { useEffect, useState, useRef } from "react"
import { addCollection, collectionRef } from "@/Firebase/realtimeDB"
import { onSnapshot } from "firebase/firestore"
import { ToastContainer } from "react-toastify";
import { ShowErrorToast, ShowToast } from "@/utils/Toast";
export default function ChatContent() {
    const [hydrated, setHydrated] = useState(false)
    const [messsages, setMessages] = useState([])
    const nameRef = useRef()
    const messageRef = useRef()
    var randomEmojie
    useEffect(() => {
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
        return () => {
            unsubscribe()
        }
    }, [])
    useEffect(() => {
        setHydrated(true)
        if(document.getElementById("chatScreen") && messsages.length > 0) {
            // scroll to bottom of chat
            document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight
        }
    }, [messsages])
    if (hydrated) {
        randomEmojie = require("random-unicode-emoji")
    }
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Chat</h1>
            <div id="chatScreen" className=" my-10 p-3 overflow-y-scroll bg-[#111827] h-full rounded w-full">
                {hydrated && messsages.length > 0 && messsages.map((item, index) => {
                    return (<a key={index} className="hover:bg-slate-600 select-none text-lg transition-all duration-200 cursor-pointer min-w-28 mb-5 h-18 px-5 flex flex-col justify-center items-start rounded-lg bg-[#111827]">
                        <p className="flex justify-between w-full">{randomEmojie.random({ count: 1 }) + " "}{item.data.name}<span className="text-[0.75rem]">- {item.data.timestamp}</span></p>
                        <p className="text-[0.8rem]">{item.data.message}</p>
                    </a>
                    )
                })}
            </div>
            {/* text box */}
            <div className="flex flex-row h-fit mb-5 justify-between items-center w-full">
                <input ref={nameRef} className="w-[20%] ml-1 h-12 rounded-lg bg-[#111827] text-white p-3" type="text" placeholder="Type your name" />
                <input ref={messageRef} className="w-[90%] mx-1 h-12 rounded-lg bg-[#111827] text-white p-3" type="text" placeholder="Type a message" />
                <button onClick={() => {
                    if(nameRef.current.value.length > 0 && messageRef.current.value.length > 0) {
                        addCollection(nameRef.current.value, messageRef.current.value)
                        nameRef.current.value = ""
                        messageRef.current.value = ""
                        ShowToast({ text: "Message sent" })
                    }
                    else ShowErrorToast({ text: "Please fill in all fields" })
                }} className="w-[full] h-12 rounded-lg bg-[#111827] text-white p-3">Send</button>
            </div>
        </div>
    )
}