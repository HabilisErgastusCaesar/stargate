import styles from './searchFilterInput.module.css'

type filterInput = {
    selection: string
}

export const SearchFilterInput = ({selection}:filterInput) => {
    return <input placeholder='kanker' className={styles[selection]} />
}