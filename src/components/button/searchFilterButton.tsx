import styles from './searchFilterButton.module.css'

type filterButton = {
    selection: string;
}

export const SearchFilterButton = ({selection}:filterButton) => {
    return<button className={styles[selection]}>open</button>
}