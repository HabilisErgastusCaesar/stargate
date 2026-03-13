import styles from './searchFilter.module.css'

import { SearchFilterButton } from '@/components/button/searchFilterButton'
import { SearchFilterInput } from '@/components/input/searchFilterInput'

type searchFilter = {
    selection:string;
}

export const SearchFilter = ({selection}:searchFilter) => {
    return <div className={styles.container}>
        <SearchFilterButton selection={selection}/>
        <SearchFilterInput selection={selection}/>
    </div>
}