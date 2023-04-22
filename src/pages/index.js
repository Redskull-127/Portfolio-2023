import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import HomeScreen from "@/components/HomeScreen";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Layout>
        
        <HomeScreen />
      </Layout>
    </>
  );
}
