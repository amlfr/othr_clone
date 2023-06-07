import Image from "next/image";
import styles from "./page.module.scss";
import data from "../public/data/data.json";
import Footer from "../component/Footer/index";
import Banner from "../component/Banner/index";
import Metrics from "../component/Metrics";
import Carousel from "../component/Carousel";

export default function Home() {
    return (
        <main className={styles.main}>
            <Banner />
            <Carousel category="events" data={data.events} />
            <Carousel category="medias" data={data.medias} />
            <Metrics />
            <Footer />
        </main>
    );
}
