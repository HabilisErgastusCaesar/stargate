import styles from './searchFilter.module.css'

import { SearchFilterButton } from '../../../components/button/searchFilterButton';
import { SearchFilterInput } from '../../../components/input/searchFilterInput'
import { SearchResults } from './searchResults/searchResults';
import { OptionsWindow } from './optionWindow/optionsWindow';

type searchFilter = {
    popup: any
    setPopup:React.Dispatch<React.SetStateAction<string>>;
}

export const SearchFilter = ({popup, setPopup}:searchFilter) => {
    return <div className={styles.container}>
        <span>
            <SearchFilterButton selection={popup.class} setOptions={setPopup} />
            <SearchFilterInput selection={popup.class} setOpen={setPopup}/>
        </span>
        {popup.searchState.open && !popup.options.open && <SearchResults setPopup={setPopup}/>}
        {popup.options.open && <OptionsWindow/>}
    </div>
}