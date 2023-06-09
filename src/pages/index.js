import Layout from "../components/Layout";
import HomeScreen from "@/components/HomeScreen";
import Head from "next/head";
import { useEffect } from "react";
import { getAnalyticsPageView } from "@/Firebase/analytics";

const Home = () => {
  useEffect(() => {
    if(process.env.NODE_ENV === "production"){
      getAnalyticsPageView();
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
        />
      </Head>
      <Layout>
        <HomeScreen />
      </Layout>
    </>
  );
};

export default Home;

