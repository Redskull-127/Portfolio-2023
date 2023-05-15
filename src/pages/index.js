import Layout from "../components/Layout";
import HomeScreen from "@/components/HomeScreen";

const Home = ({ data }) => {
  return (
    <>
      <Layout data={{
        github: data.github,
        twitter: data.twitter,
      }}>
        <HomeScreen />
      </Layout>
    </>
  );
}

export default Home;
export async function getServerSideProps() {
  async function getTwitterData() {
    const twitterData = await fetch(`${process.env.NEXTAUTH_URL}/api/twitter`).then((res) => res.json());
    return twitterData;
  }
  
  async function getGithubData() {
    const githubData = await fetch(`${process.env.NEXTAUTH_URL}/api/github`).then((res) => res.json());
    return githubData;
  }
  return {
    props: {
      data: {
        github: await getGithubData(),
        twitter: await getTwitterData(),
      }
    }
  }
}