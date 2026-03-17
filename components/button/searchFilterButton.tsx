import styles from './searchFilterButton.module.css'

type filterButton = {
    selection: string;
    setOptions: React.Dispatch<React.SetStateAction<any>>
}

export const SearchFilterButton = ({selection, setOptions}:filterButton) => {
    return<button className={styles[selection]}
    onClick={() => setOptions((prev:any) => ({
        ...prev,
        open: !prev.open,
    }))}>open</button>
}