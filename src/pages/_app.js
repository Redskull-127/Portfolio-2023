import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NextNProgress from "nextjs-progressbar";
import Song from "@/components/Song";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { FcRotateToPortrait } from "react-icons/fc";

export default function App({ Component, pageProps }) {
  
  const router = useRouter();
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 250 });
    switch (router.pathname) {
      case "/":
        document.title = "Meer Tarbani's Portfolio";
        break;
      case "/skills":
        document.title = "Skills | Meer Tarbani's Portfolio";
        break;
      case "/latest":
        document.title = "Latest Projects & Events | Meer Tarbani's Portfolio";
        break;
      case "/blogs":
        document.title = "Blog | Meer Tarbani's Portfolio";
        break;
      case "/chat":
        document.title = "Chat | Meer Tarbani's Portfolio";
        break;
      case "/contact":
        document.title = "Contact | Meer Tarbani's Portfolio";
        break;
    }
  }, [router.pathname]);

  useEffect(() => {
    if (document.getElementById("profilePicture")) {
      const img = document.getElementById("profilePicture");
      img.classList.add("animate-swipe");
    }
  }, []);

  useEffect(() => {
    const mediaMatch = window.matchMedia("(orientation: portrait)")
    mediaMatch.addEventListener("change", (e) => {
      router.reload()
    });
    const portraits = mediaMatch.matches;
    if (portraits) {
      setPortrait(true);
    } else {
      setPortrait(false);
    }
  }, [router]);

  if (!portrait) {
    return (
      <>
        <NextNProgress />
        <Head>
          <title>Meer Tarbani&apos;s Portfolio</title>
          <meta name="description" content="Meer Tarbani Portfolio Website" />
          <meta
            name="keywords"
            content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
          />
        </Head>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
          <Analytics />
        </SessionProvider>
        <Song />
      </>
    );
  }
  if (portrait) {
    return (
      <>
        <NextNProgress />
        <Head>
          <title>Meer Tarbani&apos;s Portfolio</title>
          <meta name="description" content="Meer Tarbani Portfolio Website" />
          <meta
            name="keywords"
            content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
          />
        </Head>
        <div className="w-full h-screen text-center flex justify-center items-center flex-col">
          <h1 className="text-2xl w-[85%]">
            Please rotate your device to landscape mode to view this website!
          </h1>
          <FcRotateToPortrait className="text-9xl animate-shake rotate-90" />
        </div>
      </>
    );
  }
}
