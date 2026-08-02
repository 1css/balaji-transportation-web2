import Head from "next/head";
import Navbar from "../../components/Home/sections/Navbar";
import Footer from "../../components/Home/sections/Footer";
import CareersDetail from "../../components/Careers/CareersDetail";
import siteData from "../../data/siteData";

export default function CareerRolePage({ role }) {
  const { brand, nav, careers } = siteData;

  return (
    <>
      <Head>
        <title>
          {role.title} — Careers | {brand.name}
        </title>
        <meta name="description" content={role.summary} />
      </Head>
      <Navbar brand={brand} links={nav} basePath="/" />
      <CareersDetail careers={careers} role={role} />
      <Footer brand={brand} links={nav} basePath="/" />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: siteData.careers.roles.map((role) => ({ params: { slug: role.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const role = siteData.careers.roles.find((item) => item.slug === params.slug);

  if (!role) {
    return { notFound: true };
  }

  return { props: { role } };
}
