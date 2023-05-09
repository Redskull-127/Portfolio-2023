/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from "react"
import { useSession, signIn, signOut } from 'next-auth/react';
import { addCollection, collectionRef,collectionRefOrder } from "@/Firebase/realtimeDB"
import { onSnapshot, orderBy, query } from "firebase/firestore"
import { ShowErrorToast, ShowToast } from "@/utils/Toast";
import Image from "next/image";
export default function ChatContent() {
    const { data, status } = useSession()
    const [hydrated, setHydrated] = useState(false)
    const [messages, setMessages] = useState([])
    const nameRef = useRef()
    const messageRef = useRef()
    var randomEmojie
    useEffect(() => {
        const unsubscribe = onSnapshot(collectionRefOrder, (snapshot) => {
            // console.log("snapshot", snapshot.docs)
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
        return () => {
            unsubscribe()
        }
    }, [])
    useEffect(() => {
        setHydrated(true)
        if (document.getElementById("chatScreen") && messages.length > 0) {
            // scroll to bottom of chat
            document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight
        }
    }, [messages])
    if (hydrated) {
        randomEmojie = require("random-unicode-emoji")
    }
    function uniqueEmojie(){
        const random = randomEmojie.random({ count: 1 }).map((item) => { return item.toString() })
        return random[0]
    }
    if (status === "loading") {
        return (
            // circular progress
            <div className="flex flex-col justify-start overflow-hidden items-start h-full">
                <h1 data-aos="fade-left" className="text-5xl">Chat</h1>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }
    if (status === "authenticated") {
        return (
            <div className="flex flex-col justify-start overflow-hidden items-start h-full">
                <div data-aos="fade-left" className="w-full flex justify-between items-center">
                    <div className="w-full flex">
                        <span className="text-5xl">Chat</span>
                        <div className="ml-7 flex flex-col h-full">
                            <h1>Welcome</h1>
                            <h1>{data.user.name}</h1>
                        </div>
                    </div>
                    <button onClick={() => {
                        try{
                            signOut()
                        } catch (err) {
                            ShowErrorToast({text: "Error signing out\nerr.message"})
                        } finally {
                            ShowToast({text: "Signed out"})
                        }
                    }} className="text-xl inline-block w-28 bg-[#111827] p-3 rounded-lg text-[#EF4444]">
                        Sign out</button>
                </div>
                <div id="chatScreen" className=" my-10 p-3 overflow-y-scroll bg-[#111827] h-full rounded w-full">
                    {hydrated && messages.length > 0 && messages.map((item, index) => {
                        return (<a key={index} className="hover:bg-slate-600 select-none text-lg transition-all duration-200 cursor-pointer min-w-28 mb-5 h-18 px-5 flex flex-col justify-center items-start rounded-lg bg-[#111827]">
                            <p className="flex justify-between w-full">{item.data.name}
                            <span className="text-[0.75rem]">- {(item.data.timestamp)?.toDate().toLocaleTimeString({
                            }) || <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>}</span>
                            </p>
                            <p className="text-[0.8rem]">{item.data.message}</p>
                        </a>
                        )
                    })}
                </div>
                {/* text box */}
                <div className="flex flex-row h-fit mb-5 justify-between items-center w-full">
                    <input ref={messageRef} className="w-[90%] mx-1 h-12 rounded-lg bg-[#111827] text-white p-3" type="text" placeholder="Type a message" />
                    <button onClick={() => {
                        if (messageRef.current.value.length > 0) {
                            addCollection(`${uniqueEmojie()} ${data.user.name}`, messageRef.current.value, data.user.email)
                            messageRef.current.value = ""
                            ShowToast({ text: "Message sent" })
                        }
                        else ShowErrorToast({ text: "Please fill in all fields" })
                    }} className="w-[full] h-12 rounded-lg bg-[#111827] text-white p-3">Send</button>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Chat</h1>
            <div className="w-full h-full mt-10">
                <button onClick={() => signIn("google")} className="flex flex-row justify-center items-center w-[fit-content] h-[fit-content] p-3 rounded-lg bg-[#111827] text-white">
                    <img className="w-10 h-10" src="/Images/google.svg" alt="google logo" />
                    <p className="ml-2">Sign in with Google</p>
                </button>
            </div>
        </div>
    )
}

