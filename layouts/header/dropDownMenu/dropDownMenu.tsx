import { DropDownSelectSeason } from './dropDownLayouta/DropDownSelectSeason'
import { DropDownButton } from '../../../components/button/dropDownButton'
import styles from './dropDownMenu.module.css'

import { useCallback } from 'react'

type dropDown = {
    popup: any
    setPopup:React.Dispatch<React.SetStateAction<string>>;
}

export const DropDownMenu = ({popup, setPopup}:dropDown) => {
    const selectOpen = useCallback(
        (class_selection:string, number:number) => {
            const update = (setOpen:Boolean, Class:String, setBool:Boolean) => {
                setPopup((prev:any) => ({
                    ...prev,
                    dropDown: {
                        ...prev.dropDown,
                        open: setOpen,
                        class: Class,
                        number: number,
                    },
                    searchState: {
                        ...prev.searchState,
                        open: setBool
                    },
                    options: {
                        ...prev.options,
                        open: false
                    },
                }))
            }
            if (popup.dropDown.open && popup.dropDown.class === class_selection) {
                const checkBool = document.getElementById("searchFilterInput");
                let setBool = false;
                
                if (checkBool instanceof HTMLInputElement && checkBool.value !== "") {
                    setBool = true;
                }

                update(false, popup.class, setBool);
            } else {
                update(true, class_selection, false);
        }},[popup, setPopup]
    )

    return <div className={styles[popup.dropDown.class]}>
        <DropDownButton text={"sg-1"} func={selectOpen} state={popup.dropDown.open} 
        check={popup.dropDown.class} arg={"container_sgOne"} number={10} class_select={popup.dropDown.class} />
        <DropDownButton text={"atlantis"} func={selectOpen} state={popup.dropDown.open} 
        check={popup.dropDown.class} arg={"container_atlantis"} number={5} class_select={popup.dropDown.class} />
        <DropDownButton text={"universe"} func={selectOpen} state={popup.dropDown.open} 
        check={popup.dropDown.class} arg={"container_universe"} number={2} class_select={popup.dropDown.class} />
        {popup.dropDown.open && <DropDownSelectSeason class_select={popup.class}
        number={popup.dropDown.number} Class={popup.dropDown.class} setState={setPopup}/>}
    </div>
}