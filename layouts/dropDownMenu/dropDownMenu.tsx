import { DropDownSelectSeason } from './dropDownLayouta/DropDownSelectSeason'
import { DropDownButton } from '../../components/button/dropDownButton'
import styles from './dropDownMenu.module.css'

import { useState } from 'react'

export const DropDownMenu = () => {
    const [ dropDown, setDropDown ] = useState({
        open: false,
        number: 5,
        class: "container_sgOne"
    });

    const selectOpen = (class_select:string, number:number) => {
        if (dropDown.open && dropDown.class === class_select) {
            setDropDown((prev) => ({
                ...prev,
                open: false
            }))
        } else {
            setDropDown(() => ({
                open: true,
                number: number,
                class: class_select
            }))
        }
    }

    return <div className={styles.container_sgOne}>
        <DropDownButton text={"sg-1"} func={selectOpen} state={dropDown.open} 
        check={dropDown.class} arg={"container_sgOne"} number={10} />
        <DropDownButton text={"atlantis"} func={selectOpen} state={dropDown.open} 
        check={dropDown.class} arg={"container_atlantis"} number={5} />
        <DropDownButton text={"universe"} func={selectOpen} state={dropDown.open} 
        check={dropDown.class} arg={"container_universe"} number={2} />
        {dropDown.open && <DropDownSelectSeason 
        number={dropDown.number} Class={dropDown.class} setState={setDropDown}/>}
    </div>
}