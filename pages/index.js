import Head from "next/head";
import Clients from "../components/Clients";
import Company from "../components/Company";
import Map from "../components/Map";
import Products from "../components/Products";
import Shape from "../components/Shape";
import Slider from "../components/Slider";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Be Aim Texh</title>
        <meta name="description" content="Best Software House In Town" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Slider />
      <Products />
      <Clients />
      <Testimonials />
      <Team />
      <Map />
    </>
  );
}
