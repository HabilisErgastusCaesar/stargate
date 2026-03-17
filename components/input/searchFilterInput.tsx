import styles from './searchFilterInput.module.css'

type filterInput = {
<<<<<<< HEAD
    selection: string;
    setOpen: React.Dispatch<React.SetStateAction<any>>;
}

export const SearchFilterInput = ({selection, setOpen}:filterInput) => {
    const setText = (event:any) => {
        const target = event.target.value;
        setOpen((prev:any) => {
            const newData = prev;
            if (target !== "" && !newData.open) {
                newData.open = true;
            } else if (target === "") {
                newData.open = false;
            } 
            newData.searchResults = target;
            return {...newData};
        })
    }
    
    return <input onChange={(e) => setText(e)} placeholder='search episode' className={styles[selection]} />
=======
    selection: string
}

export const SearchFilterInput = ({selection}:filterInput) => {
    return <input placeholder='kanker' className={styles[selection]} />
>>>>>>> 2a5edbba64cc0889fd6abacc6e13aa09685ea2c0
}