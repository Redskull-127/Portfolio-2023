/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from "react"
import { useSession, signIn, signOut } from 'next-auth/react';
import { addCollection, collectionRefOrder } from "@/Firebase/realtimeDB"
import { onSnapshot } from "firebase/firestore"
import { ShowErrorToast, ShowToast } from "@/utils/Toast";
import { GifIcon } from "@/utils/Icons";
import GiphyInterface from "@/utils/Giphy";


export default function ChatContent() {
    const { data, status } = useSession()
    const [hydrated, setHydrated] = useState(false)
    const [messages, setMessages] = useState([])
    const [gif, setGif] = useState(false)
    const messageRef = useRef()
    var randomEmojie
    useEffect(() => {
        const unsubscribe = onSnapshot(collectionRefOrder, (snapshot) => {
            try {
                if (snapshot.docs.length > messages.length) {
                    document.getElementById("messageSound").play()
                }
            } catch (err) {
                console.log(err.message)
            } finally {

                setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
            }
        })
        return () => {
            unsubscribe()
        }
    }, [messages.length])

    useEffect(() => {
        setHydrated(true)
        try {
            if (document.getElementById("chatScreen") && messages.length > 0) {
                document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight
            }
        } catch (err) {
            console.log(err.message)
            ShowErrorToast({ text: "Error scrolling to bottom\nerr.message" })
        }
    }, [messages])
    if (hydrated) {
        randomEmojie = require("random-unicode-emoji")
    }
    function uniqueEmojie() {
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
                    {gif === true ? <GiphyInterface search={messageRef.current?.value} showToast={ShowToast} showErrorToast={ShowErrorToast} addCollection={addCollection} userData={data} uniqueEmojie={uniqueEmojie} setGif={setGif} /> : null}
                    <div className="w-full flex">
                        <span className="text-5xl">Chat</span>
                        <div className="ml-7 flex flex-col h-full">
                            <span>Welcome</span>
                            <span className="flex gap-2">{data.user.name}<img src={data.user.image != "" && data.user.image} height='24' width='24' className="rounded-full" alt="logo" /></span>
                        </div>
                    </div>
                    <button onClick={() => {
                        try {
                            signOut()
                        } catch (err) {
                            ShowErrorToast({ text: "Error signing out\nerr.message" })
                        } finally {
                            ShowToast({ text: "Signed out" })
                        }
                    }} className="text-lg inline-block w-28 bg-[#111827] transition-all duration-300 p-2 active:scale-50 rounded-lg text-[#EF4444]">
                        Sign out</button>
                </div>
                <div id="chatScreen" className=" my-10 p-3 overflow-y-scroll bg-[#111827] h-full rounded w-full">
                    {hydrated && messages.length > 0 && messages.map((item, index) => {
                        return (<a key={index} className="hover:bg-slate-600 select-none text-lg transition-all duration-200 cursor-pointer min-w-28 mb-5 h-18 px-5 flex flex-col justify-center items-start rounded-lg bg-[#111827]">
                            <p className="flex justify-between w-full">{item.data.name}
                                <span className="text-[0.75rem]">- {(item.data.timestamp)?.toDate().toLocaleTimeString({
                                }) || <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>}</span>
                            </p>
                            {/* <p className="text-[0.8rem]">{item.data.message}</p> */}
                            {/* get last 4 letters (.gif) */}
                            {item.data.message.slice(-4) === ".gif" ? <img src={item.data.message} className="rounded-xl" alt="gif" /> : <p className="text-[0.8rem]">{item.data.message}</p>}
                        </a>
                        )
                    }) || <div className="w-full h-full flex flex-col justify-center items-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
                        </div>}
                </div>
                {/* text box */}
                <div className="flex flex-row h-fit mb-5 justify-between items-center w-full">
                    <input ref={messageRef} className="w-[90%] mx-3 h-12 rounded-lg bg-[#111827] text-white p-3" placeholder="Type a message" />
                    <button onClick={(e) => {
                        e.preventDefault()
                        setGif(gif === true ? false : true)
                    }} className="w-[full] h-12 rounded-lg mx-3 bg-[#111827] text-white p-3">
                        <GifIcon />
                    </button>
                    <button onClick={() => {
                        if (messageRef.current.value.length > 0) {
                            addCollection(`${uniqueEmojie()} ${data.user.name}`, messageRef.current.value, data.user.email)
                            messageRef.current.value = ""
                            ShowToast({ text: "Message sent" })

                        }
                        else ShowErrorToast({ text: "Please fill in all fields" })
                    }} className="w-[full] h-12 rounded-lg bg-[#111827] text-white p-3">Send</button>
                </div>
                <audio
                    className="hidden"
                    src="/Sound/incoming.mp3"
                    id="messageSound"
                    muted={false}
                    autoPlay={false}
                ></audio>
            </div>
        )
    }
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Chat</h1>
            <div className="w-full h-full flex gap-10 mt-10 justify-start items-start">
                <div className="flex">
                    <button onClick={() => signIn("google")} className="flex flex-row justify-center items-center w-[fit-content] h-[fit-content] p-3 rounded-lg bg-[#111827] text-white">
                        <img className="w-10 h-10" src="/Images/google.svg" alt="google logo" />
                        <p className="ml-2">Sign in with Google</p>
                    </button>
                </div>
                <div className="flex">
                    <button onClick={() => signIn("github")} className="flex flex-row justify-center items-center w-[fit-content] h-[fit-content] p-3 rounded-lg bg-[#111827] text-white">
                        <img className="w-10 h-10" src="/Images/github.png" alt="google logo" />
                        <p className="ml-2">Sign in with Github</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

