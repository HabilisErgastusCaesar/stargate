import styles from './navButtonLayout.module.css'

type navButton = {
    select: string;
    setSelect: React.Dispatch<React.SetStateAction<string>>;
}

export const NavButtonsLayout = ({select, setSelect}:navButton) => {
    return <section className={styles.container}>
        <button 
        className={select === "cast" ? styles.button_select : styles.button_unselect}
        onClick={() => setSelect("cast")}>
            cast
        </button>
        <button 
        className={select === "episode" ? styles.button_select : styles.button_unselect}
        onClick={() => setSelect("episode")}>
            episode
        </button>
        <button 
        className={select === "info" ? styles.button_select : styles.button_unselect}
        onClick={() => setSelect("info")}>
            info
        </button>
    </section>
}