import Head from "next/head";
import Loader from "../components/Loader/Loader";
import Home from "../components/Home/Home";
import siteData from "../data/siteData";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>{siteData.brand.name} | {siteData.brand.tagline}</title>
      </Head>
      <Loader />
      <Home />
    </>
  );
}
