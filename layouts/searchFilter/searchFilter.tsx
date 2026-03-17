import styles from './searchFilter.module.css'

import { SearchFilterButton } from '../../components/button/searchFilterButton';
import { SearchFilterInput } from '../../components/input/searchFilterInput'
<<<<<<< HEAD
import { SearchResults } from './searchResults/searchResults';
import { OptionsWindow } from './optionWindow/optionsWindow';

import { useState } from 'react';
=======
>>>>>>> 2a5edbba64cc0889fd6abacc6e13aa09685ea2c0

type searchFilter = {
    selection:string;
}

export const SearchFilter = ({selection}:searchFilter) => {
<<<<<<< HEAD
    const [ searchState, setSearchState ] = useState<any>({
        open: false,
        searchResults: "",
    });
    
    const [ options, setOptions ] = useState({
        open: false,
        episodes: true,
        cast: false,
        serie: "all",
    });

    return <div className={styles.container}>
        <span>
            <SearchFilterButton selection={selection} setOptions={setOptions} />
            <SearchFilterInput selection={selection} setOpen={setSearchState}/>
        </span>
        {searchState.open && !options.open && <SearchResults />}
        {options.open && <OptionsWindow/>}
=======
    return <div className={styles.container}>
        <SearchFilterButton selection={selection}/>
        <SearchFilterInput selection={selection}/>
>>>>>>> 2a5edbba64cc0889fd6abacc6e13aa09685ea2c0
    </div>
}