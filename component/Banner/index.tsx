import styles from "./Banner.module.scss";
import Image from "next/image";
import companyLogo from "../../public/icons/Groupe 1829@2x.png";
import data from "../../public/data/data.json";

const Banner = () => {
    /* const refactor = 1; */
    return (
        <div className={styles.container}>
            <Image
                src={companyLogo}
                alt="company logo"
                className={styles.logo}
            />
            <h2 className={styles.title}>{data.promo.title}</h2>
            <p
                dangerouslySetInnerHTML={{
                    __html: data.promo.text.replace(/\n/g, "<br>"),
                }}
                className={styles.text}
            ></p>
            <div className={styles.button}>
                <p className={styles.content}>Découvrir</p>
            </div>
        </div>
    );
};

export default Banner;
