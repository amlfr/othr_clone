import styles from "./Page.module.scss";

export default function Event({ params }: { params: { id: number } }) {
    return (
        <main className={styles.main}>
            <h1>Event {params.id}</h1>
        </main>
    );
}
