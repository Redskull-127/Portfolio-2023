import ChatChips from "@/utils/ChatChips"
import { TestData } from "@/CustomData/Data"
import { useEffect, useState } from "react"
import { getDatabase, ref, set, onValue } from "firebase/database";
import firebase_app from "@/Firebase/Config";

export default function ChatContent() {
    const [hydrated, setHydrated] = useState(false)
    const [data, setData] = useState([])
    var randomEmojie
    useEffect(() => {
        const db = getDatabase(firebase_app);
        const starCountRef = ref(db);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            setData(data.users)
        });
    }, [])
    useEffect(() => {
        setHydrated(true)
    }, [])
    if (hydrated) {
        randomEmojie = require("random-unicode-emoji")
    }
    async function writeUserData(Name, Message) {
        // const db = getDatabase(firebase_app);
        await set(ref(getDatabase(firebase_app), 'users/' + crypto.randomUUID()), {
            username: Name,
            message: Message,
            date: new Date().toLocaleString(),
        });

        return console.log("Data logged");
    }
    return (
        <div className="flex flex-col justify-start overflow-hidden items-start h-full">
            <h1 data-aos="fade-left" className="text-5xl">Chat</h1>
            <div className=" my-10 p-3 overflow-y-scroll bg-[#111827] h-full rounded w-full">
                {hydrated && TestData().map((data, index) => {
                    return (
                        <ChatChips
                            key={index}
                            Name={data.Name}
                            Description={data.Message}
                            Time={data.Time}
                            Emojie={randomEmojie.random({ count: 1 })}
                        />
                    )
                })
                }
            </div>
            {/* text box */}
            <div className="flex flex-row h-fit mb-5 justify-between items-center w-full">
                <input className="w-[20%] ml-1 h-12 rounded-lg bg-[#111827] text-white p-3" type="text" placeholder="Type your name" />
                <input className="w-[90%] mx-1 h-12 rounded-lg bg-[#111827] text-white p-3" type="text" placeholder="Type a message" />
                <button onClick={() => {
                    writeUserData("Meer Tarbani", "hue World!")
                }} className="w-[full] h-12 rounded-lg bg-[#111827] text-white p-3">Send</button>
            </div>
        </div>
    )
}