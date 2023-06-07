"use client";

import styles from "./Card.module.scss";
import Link from "next/link";
import Image from "next/image";
import companyIcon from "../../public/icons/Groupe 3426@2x.png";
import locationIcon from "../../public/icons/location-pin-svgrepo-com.svg";
import magazineIcon from "../../public/icons/magazine.png";
import authorPhoto from "../../public/images/photo-perso.webp";

interface eventProps {
    id: number;
    title: string;
    date: string;
    city: string;
    people: number;
}

interface mediaProps {
    id: number;
    title: string;
    text: string;
    views: number;
    shares: number;
}

interface props {
    info: mediaProps | eventProps;
    category: string;
}

const Card = (props: props) => {
    console.log(props.info);
    return props.category === "events" ? (
        <Link href={`/events/${props.info.id}`}>
            <div className={[styles.container, styles.eventsBg].join(" ")}>
                <div className={styles.eventFilter}></div>
                <div className={styles.eventsContent}>
                    <div className={styles.iconContainer}>
                        <div className={styles.date}>
                            <p>
                                {
                                    /* Getting only the day in the date string  */
                                    (props.info as eventProps).date.split(
                                        "/"
                                    )[0]
                                }
                            </p>
                        </div>
                        <Image
                            src={companyIcon}
                            alt="Company icon"
                            className={styles.companyIcon}
                        />
                    </div>
                    <h3 className={styles.eventTitle}>
                        {(props.info as eventProps).title}
                    </h3>
                    <div className={styles.location}>
                        <Image
                            src={locationIcon}
                            alt="location icon"
                            className={styles.locationIcon}
                        />
                        <p className={styles.city}>
                            {(props.info as eventProps).city}
                        </p>
                    </div>
                    <p className={styles.people}>
                        {(props.info as eventProps).people} participants
                    </p>
                </div>
            </div>
        </Link>
    ) : (
        <Link href={`/events/${props.info.id}`}>
            <div className={[styles.container, styles.mediasBg].join(" ")}>
                <div className={styles.mediaFilter}></div>
                <div className={styles.mediasContent}>
                    <div className={styles.mediaTop}>
                        <div className={styles.channel}>
                            <Image
                                src={magazineIcon}
                                alt="media icon"
                                className={styles.channelIcon}
                            />
                            <span>MAGAZINE</span>
                        </div>
                        <p className={styles.field}>COMMUNICATION</p>
                        <h3 className={styles.mediaTitle}>
                            {(props.info as mediaProps).title}
                        </h3>
                        <p className={styles.mediaText}>
                            {(props.info as mediaProps).text}
                        </p>
                    </div>
                    <div className={styles.mediaBottom}>
                        <div className={styles.author}>
                            <Image
                                src={authorPhoto}
                                alt="author picture"
                                className={styles.photo}
                            />
                            <div>
                                <p className={styles.name}>
                                    Antony Martinez--Lalenec
                                </p>
                                <p className={styles.job}>
                                    Alternant développeur web
                                </p>
                            </div>
                        </div>

                        <div className={styles.engagement}>
                            <div className={styles.fill}>
                                <p className={styles.value}>
                                    {(props.info as mediaProps).views}
                                </p>
                            </div>
                            <div className={styles.empty}></div>
                            <p className={styles.label}>Audiences</p>
                        </div>

                        <div className={styles.engagement}>
                            <div className={styles.empty}></div>
                            <div
                                className={[styles.fill, styles.bigFill].join(
                                    " "
                                )}
                            >
                                <p className={styles.value}>
                                    {(props.info as mediaProps).shares}
                                </p>
                            </div>

                            <p className={styles.label}>Partages</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

/* const Card = (props: props) => {
    console.log(props.info);
    return props.info.hasOwnProperty("date") ? (
        <Link href={`/events/${props.info.id}`}>
            <div className={[styles.container, styles.eventBg].join(" ")}>
                <div className={styles.filter}></div>
                <div className={styles.eventsContent}>
                    <div className={styles.date}>
                        <p>{props.info.date}</p>
                    </div>
                </div>
            </div>
        </Link>
    ) : (
        <div className={[styles.container, styles.mediaBg].join(" ")}>
            <div className={styles.mediasContent}></div>
            <p>Not Event</p>
        </div>
    );
}; */

export default Card;
