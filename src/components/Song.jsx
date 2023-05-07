import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import { PlayIcon, PauseIcon, Spotify } from "@/utils/Icons";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import {ShowToast} from "@/utils/Toast";
export default function Song() {
    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);
    const [songUrl, setSongUrl] = useState("");
    
    useEffect(() => {
        if (document.getElementById("audio")) {
            const audio = document.getElementById("audio");
            if (isPlaying) {
                audio.play();
                ShowToast({ text: "Playing" });
            } else if (!isPlaying) {
                audio.pause();
                ShowToast({ text: "Paused" });
            } else {
                console.log("Error");
            }
            audio.addEventListener("ended", () => {
                setIsPlaying(false);
                ShowToast({ text: "Ended" });
            });
        }
    }, [isPlaying]);
    
    useEffect(() => {
        if(router.pathname !== "/chat") {
        const handleKeyPress = (e) => {
            if (e.code === "Space" && isPlaying) {
                console.log("Space pressed");
                setIsPlaying(false);
            }
            if (e.code === "Space" && !isPlaying) {
                console.log("Space pressed");
                setIsPlaying(true);
            }
        }
        window.addEventListener("keypress", handleKeyPress)
        return () => {
            window.removeEventListener("keypress", handleKeyPress)
        }}
    }, [isPlaying, router.pathname]);

    useEffect(() => {
        const handleToast = () => {
            ShowToast({ text: "Press Space Bar to play song" });
        }
        const handleReceiveMessage = (event) => {
            const data = event.data;
            if (typeof data == "string") {
                console.log(data.slice(5));
                setSongUrl(data.slice(5));
            }
        };

        window.addEventListener("message", handleReceiveMessage);
        window.addEventListener("load", handleToast);

        return () => {
            window.removeEventListener("message", handleReceiveMessage);
            window.removeEventListener("load", handleToast);    
        };
    }, []);
    return (
        <>
            <iframe
                id="spotify"
                src="https://novatorem-redskull-127.vercel.app/api/spotify"
                className="absolute top-0 left-[32%] iframe"
                height={150}
                width={750}
            ></iframe>
            <div className="absolute top-14 left-[63%] cursor-pointer">
                {songUrl && isPlaying ? (
                    <div onClick={() => setIsPlaying(false)}>
                        <PauseIcon />
                    </div>
                ) : (
                    <div onClick={() => setIsPlaying(true)}>
                        <PlayIcon />
                    </div>
                )}
            </div>
            <Link href="https://open.spotify.com/user/to6rms2g0fzerpkwox1k4v33w" target={"_blank"} className="absolute top-14 left-[66%] cursor-pointer">
                <Spotify />
            </Link>
            {songUrl != "" && (
                <audio
                    className="hidden"
                    src={songUrl}
                    id="audio"
                    muted={false}
                ></audio>
            )}
            <ToastContainer />
        </>
    )
}