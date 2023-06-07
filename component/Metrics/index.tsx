import styles from "./Metrics.module.scss";
import Image from "next/image";
import star from "../../public/icons/star.png";

const Metrics = () => {
    return (
        <section className={styles.section}>
            <div
                className={[styles.container, styles.border].join(" ")}
                style={{ paddingLeft: "0" }}
            >
                <b className={styles.value}>2</b>
                <div className={styles.information}>
                    <h3 className={styles.title}>ARTICLES</h3>
                    <p className={styles.text}>24 AUDIENCE MOYENNE</p>
                    <p className={styles.text}>16 PERTINENCE MOYENNE</p>
                </div>

                <Image src={star} alt="" className={styles.star} />
            </div>
            <div className={[styles.container, styles.border].join(" ")}>
                <b className={styles.value}>76</b>
                <div className={styles.information}>
                    <h3 className={styles.title}>OTHRS</h3>
                    <p className={styles.text}>QUE TU PEUX RENCONTRER</p>
                </div>
                <Image src={star} alt="" className={styles.star} />
            </div>
            <div className={styles.container}>
                <b className={styles.value}>1036</b>
                <div className={styles.information}>
                    <h3 className={styles.title}>OTHRS</h3>
                    <p className={styles.text}>SUR TON D&Eacute;PARTEMENT</p>
                </div>
            </div>
        </section>
    );
};

export default Metrics;
