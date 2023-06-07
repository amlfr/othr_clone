import styles from "./Carousel.module.scss";
import Image from "next/image";
import eventColor from "../../public/icons/events_color.png";
import mediaColor from "../../public/icons/medias_color.png";
import arrow from "../../public/icons/arrow-up-337-svgrepo-com.svg";
import Card from "../Card/index";

interface carouselProps {
    category: string;
    data: object[];
}

const Carousel = (props: carouselProps) => {
    const createCards = props.data.map((info: any, index: number) => (
        <Card key={index} info={info} category={props.category} />
    ));

    return props.category === "events" ? (
        <section className={styles.section}>
            <div className={styles.header}>
                <Image
                    src={eventColor}
                    alt="calendar icon"
                    className={styles.hover}
                />
                <h2 className={[styles.title, styles.hover].join(" ")}>
                    Events{" "}
                </h2>
                <Image
                    src={arrow}
                    alt=""
                    className={[styles.arrow, styles.hover].join(" ")}
                />
                <p className={styles.hoverText}>Voir tous les events</p>
            </div>
            <div className={styles.container}>{createCards}</div>
        </section>
    ) : (
        <section className={styles.section}>
            <div className={styles.header}>
                <Image
                    src={mediaColor}
                    alt="media icon"
                    className={styles.hover}
                />
                <h2 className={[styles.title, styles.hover].join(" ")}>
                    Médias
                </h2>
                <Image
                    src={arrow}
                    alt=""
                    className={[styles.arrow, styles.hover].join(" ")}
                />
                <p className={styles.hoverText}>Voir tous les médias</p>
            </div>
            <div className={styles.container}>{createCards}</div>
        </section>
    );
};

export default Carousel;
