import Head from "next/head";
import Navbar from "../../components/Home/sections/Navbar";
import Footer from "../../components/Home/sections/Footer";
import CareersList from "../../components/Careers/CareersList";
import siteData from "../../data/siteData";

export default function CareersPage() {
  const { brand, nav, careers } = siteData;

  return (
    <>
      <Head>
        <title>Careers | {siteData.brand.name}</title>
        <meta
          name="description"
          content="Current openings at Balaji Transports — drivers, crane & hydra operators, logistics & dispatch, branch & office staff, and vehicle maintenance roles in Karnataka."
        />
      </Head>
      <Navbar brand={brand} links={nav} basePath="/" />
      <CareersList careers={careers} />
      <Footer brand={brand} links={nav} basePath="/" />
    </>
  );
}
