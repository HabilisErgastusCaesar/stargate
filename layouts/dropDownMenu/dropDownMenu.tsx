import { DropDownSelectSeason } from './dropDownLayouta/DropDownSelectSeason'
import { DropDownButton } from '../../components/button/dropDownButton'
import styles from './dropDownMenu.module.css'

import { useState } from 'react'

type dropDown = {
    class_select: string;
    
}

export const DropDownMenu = ({class_select}:dropDown) => {
    const [ dropDown, setDropDown ] = useState({
        open: false,
        number: 5,
        class: class_select
    });

    const selectOpen = (class_selection:string, number:number) => {
        if (dropDown.open && dropDown.class === class_selection) {
            setDropDown((prev) => ({
                ...prev,
                open: false,
                class: class_select
            }))
        } else {
            setDropDown(() => ({
                open: true,
                number: number,
                class: class_selection
            }))
        }
    }

    return <div className={styles[dropDown.class]}>
        <DropDownButton text={"sg-1"} func={selectOpen} state={dropDown.open} 
        check={dropDown.class} arg={"container_sgOne"} number={10} class_select={dropDown.class} />
        <DropDownButton text={"atlantis"} func={selectOpen} state={dropDown.open} 
        check={dropDown.class} arg={"container_atlantis"} number={5} class_select={dropDown.class} />
        <DropDownButton text={"universe"} func={selectOpen} state={dropDown.open} 
        check={dropDown.class} arg={"container_universe"} number={2} class_select={dropDown.class} />
        {dropDown.open && <DropDownSelectSeason class_select={class_select}
        number={dropDown.number} Class={dropDown.class} setState={setDropDown}/>}
    </div>
}