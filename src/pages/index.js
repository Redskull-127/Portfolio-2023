import Layout from "../components/Layout";
import HomeScreen from "@/components/HomeScreen";
import Head from "next/head";
const Home = ({ data }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Meer Tarbani, Meer, Tarbani, Portfolio, Website, meer tarbani, meer tarbani acid, meer tarbani as a fraction, meer tarbani ba, meer tarbani bali, meer tarbani bangla, meer tarbani bangla lyrics, meer tarbani battery, meer tarbani bank, meer tarbani blood pressure, meer tarbani chords, meer tarbani com, meer tarbani code, meer tarbani center, meer tarbani de, meer tarbani delhi, meer tarbani dei, meer tarbani dit, meer tarbani definition, meer tarbani download, meer tarbani disease, meer tarbani english translation, meer tarbani english lyrics, meer tarbani english, meer tarbani english pdf, meer tarbani english subtitles, meer tarbani englisch, meer tarbani example, meer tarbani film, meer tarbani facebook, meer tarbani full movie, meer tarbani fakaza, meer tarbani font, meer tarbani file, meer tarbani for sale,  eer tarbani gif, meer tarbani google translate,  meer tarbani google scholar, meer tarbani google, meer tarbani google drive, meer tarbani games, meer tarbani germany,"
        />
      </Head>
      <Layout
        data={{
          github: data.github,
          twitter: data.twitter,
        }}
      >
        <HomeScreen />
      </Layout>
    </>
  );
};

export default Home;
export async function getServerSideProps() {
  async function getTwitterData() {
    const twitterData = await fetch(
      `${process.env.NEXTAUTH_URL}/api/twitter`
    ).then((res) => res.json());
    return twitterData;
  }

  async function getGithubData() {
    const githubData = await fetch(
      `${process.env.NEXTAUTH_URL}/api/github`
    ).then((res) => res.json());
    return githubData;
  }
  return {
    props: {
      data: {
        github: await getGithubData(),
        twitter: await getTwitterData(),
      },
    },
  };
}
