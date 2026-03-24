import styles from './searchFilterInput.module.css'

type filterInput = {
    selection: string;
    setOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const SearchFilterInput = ({selection, setOpen}:filterInput) => {
    const setText = (event:any) => {
        const target = event.target.value;
        setOpen((prev:any) => {
            const newData = prev;
            if (target !== "" && !newData.searchState.open) {
                newData.searchState.open = true;
            } else if (target === "") {
                newData.searchState.open = false;
            } 
            newData.searchState.searchResults = target;
            return {...newData};
        })
    }
    
    return <input id='searchFilterInput' onChange={(e) => setText(e)} placeholder='search episode' className={styles[selection]} />
}