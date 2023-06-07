import styles from "./Footer.module.scss";
import svg from "../../public/icons/logo.png";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image src={svg} alt="Othr logo" className={styles.logo} />
            <p className={styles.text}>DIGITAL TO HUMAN - 2023</p>
        </footer>
    );
};

export default Footer;
