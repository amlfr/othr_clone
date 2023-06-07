import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from "../../public/icons/ICON.png";
import logoText from "../../public/icons/othr-logo-text.webp";
import calendar from "../../public/icons/events.png";
import othrs from "../../public/icons/othrs.png";
import network from "../../public/icons/networks.png";
import magazine from "../../public/icons/magazine.png";
import podcast from "../../public/icons/podcasts.png";
import video from "../../public/icons/video.png";
import notification from "../../public/icons/notifs.png";
import photo from "../../public/images/photo-perso.webp";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <div className={styles.heading}>
                    <Image src={logo} alt="othr logo" className={styles.logo} />
                    <Image
                        src={logoText}
                        alt="othr"
                        className={styles.logoText}
                    />
                </div>
            </Link>

            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <Image
                                src={calendar}
                                alt="calendar icon"
                                className={styles.navIcon}
                            />
                            <p className={styles.text}>Events</p>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <Image
                                src={othrs}
                                alt="others icon"
                                className={styles.navIcon}
                            />
                            <p className={styles.text}>Othrs</p>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <Image
                                src={network}
                                alt="network icon"
                                className={styles.navIcon}
                            />
                            <p className={styles.text}>Réseaux</p>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <Image
                                src={magazine}
                                alt="magazine icon"
                                className={styles.navIcon}
                            />
                            <p className={styles.text}>Magazine</p>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <Image
                                src={podcast}
                                alt="podcast icon"
                                className={styles.navIcon}
                            />
                            <p className={styles.text}>Podcasts</p>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#content" className={styles.link}>
                            <Image
                                src={video}
                                alt="video icon"
                                className={styles.navIcon}
                            />
                            <p className={styles.text}>OthrTV</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.notification}>
                <a href="#" className={styles.link}>
                    <Image src={notification} alt="notification icon" />
                    <p className={styles.text}>Notifications</p>
                </a>
            </div>
            <div className={styles.profile}>
                <Image
                    src={photo}
                    alt="profile picture"
                    className={styles.photo}
                />
                <p className={styles.text}>Bonjour Antony</p>
            </div>
            <p className={styles.credits}>@ Othr 2023</p>
        </header>
    );
};

export default Navbar;
