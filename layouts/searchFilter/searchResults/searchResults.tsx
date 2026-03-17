import styles from './searchResults.module.css'

export const SearchResults = () => {
    const setClose = () => {
        console.log("trigger");

    };
    return <div className={styles.container}>
        <section>
            <h1>search resuls</h1>
        </section>
        <section className={styles.close} onClick={() => setClose()}>

        </section>
    </div>
}