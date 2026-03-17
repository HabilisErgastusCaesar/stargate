import styles from './searchFilter.module.css'

import { SearchFilterButton } from '../../components/button/searchFilterButton';
import { SearchFilterInput } from '../../components/input/searchFilterInput'
import { SearchResults } from './searchResults/searchResults';
import { OptionsWindow } from './optionWindow/optionsWindow';

import { useState } from 'react';

type searchFilter = {
    selection:string;
}

export const SearchFilter = ({selection}:searchFilter) => {
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
    </div>
}