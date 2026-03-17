import styles from './searchFilterButton.module.css'

type filterButton = {
    selection: string;
<<<<<<< HEAD
    setOptions: React.Dispatch<React.SetStateAction<any>>
}

export const SearchFilterButton = ({selection, setOptions}:filterButton) => {
    return<button className={styles[selection]}
    onClick={() => setOptions((prev:any) => ({
        ...prev,
        open: !prev.open,
    }))}>open</button>
=======
}

export const SearchFilterButton = ({selection}:filterButton) => {
    return<button className={styles[selection]}>open</button>
>>>>>>> 2a5edbba64cc0889fd6abacc6e13aa09685ea2c0
}