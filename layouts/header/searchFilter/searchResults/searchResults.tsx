import styles from './searchResults.module.css'

type search = {
    setPopup: React.Dispatch<React.SetStateAction<any>>
}

export const SearchResults = ({setPopup}:search) => {
    const setClose = () => {
        setPopup((prev:any) => ({
            ...prev,
            searchState: {
            open: false,
            searchResults: "",
        }}));

    };
    return <div className={styles.container}>
        <section>
            <h1>search resuls</h1>
        </section>
        <section className={styles.close} onClick={() => setClose()}>

        </section>
    </div>
}