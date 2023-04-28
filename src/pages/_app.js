import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NextNProgress from "nextjs-progressbar";
import { PlayIcon, PauseIcon } from "@/utils/Icons";

export default function App({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songUrl, setSongUrl] = useState("");
  useEffect(() => {
    if (document.getElementById("audio")) {
      const audio = document.getElementById("audio");
      if (isPlaying) {
        audio.play();
      } else if (!isPlaying) {
        audio.pause();
      } else {
        console.log("Error");
      }
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        console.log("Ended");
      });
    }

  }, [isPlaying]);

  useEffect(() => {
    Aos.init({ duration: 250 });
  }, []);
  useEffect(() => {
    const handleReceiveMessage = (event) => {
      const data = event.data;
      if (typeof data == "string") {
        console.log(data.slice(5));
        setSongUrl(data.slice(5));
      }
    };

    window.addEventListener("message", handleReceiveMessage);

    return () => {
      window.removeEventListener("message", handleReceiveMessage);
    };
  }, []);

  return (
    <>
      <NextNProgress />
      <Head>
        <title>Meer Tarbani&apos;s Portfolio</title>
        <link rel="icon" href="/Images/bitmoji.png" />
        <meta name="description" content="Meer Tarbani Portfolio Website" />
        <meta
          name="keywords"
          content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
        />
      </Head>
      <Component {...pageProps} />
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
      {songUrl != "" && (
        <audio
          className="hidden"
          src={songUrl}
          id="audio"
          muted={false}
        ></audio>
      )}
    </>
  );
}
