import { DropDownSelectSeason } from './dropDownLayouta/DropDownSelectSeason'
import { DropDownButton } from '../../../components/button/dropDownButton'
import styles from './dropDownMenu.module.css'

type dropDown = {
    popup: any
    setPopup:React.Dispatch<React.SetStateAction<string>>;
}

export const DropDownMenu = ({popup, setPopup}:dropDown) => {
    const selectOpen = (class_selection:string, number:number) => {
        if (popup.dropDown.open && popup.dropDown.class === class_selection) {
            const checkBool = document.getElementById("searchFilterInput");
            let setBool = false;
            
            if (checkBool instanceof HTMLInputElement && checkBool.value !== "") {
                setBool = true;
            }
            
            setPopup((prev:any) => ({
                ...prev,
                dropDown: {
                    ...prev.dropDown,
                    open: false,
                    class: prev.class
                },
                searchState: {
                    ...prev.options,
                    open: setBool
                }
            }))
        } else {

            setPopup((prev:any) => ({
                ...prev,
                dropDown: {
                    ...prev.dropDown,
                    open: true,
                    class: class_selection
                },
                searchState: {
                    ...prev.searchState,
                    open: false
                },
                options: {
                    ...prev.options,
                    open: false
                },
            }))
        }
    }

    return <div className={styles[popup.dropDown.class]}>
        <DropDownButton text={"sg-1"} func={selectOpen} state={popup.dropDown.open} 
        check={popup.dropDown.class} arg={"container_sgOne"} number={10} class_select={popup.dropDown.class} />
        <DropDownButton text={"atlantis"} func={selectOpen} state={popup.dropDown.open} 
        check={popup.dropDown.class} arg={"container_atlantis"} number={5} class_select={popup.dropDown.class} />
        <DropDownButton text={"universe"} func={selectOpen} state={popup.dropDown.open} 
        check={popup.dropDown.class} arg={"container_universe"} number={2} class_select={popup.dropDown.class} />
        {popup.dropDown.open && <DropDownSelectSeason class_select={popup.dropDown.open}
        number={popup.dropDown.number} Class={popup.dropDown.class} setState={setPopup}/>}
    </div>
}