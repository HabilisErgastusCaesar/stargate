import styles from './dropDownButton.module.css'

type navButton = {
    text: string;
    state: Boolean;
    check: string;
    func: (arg:string, number:number) => void;
    arg: string;
    number: number;
    class_select: string;
}

export const DropDownButton = ({text, state, check, func, arg, number, class_select}:navButton) => {
    let finalClassActive = "";
    let finalClassInactive = "";
    if (class_select === "container_sgOne") {
        finalClassActive = "active_sgOne";
        finalClassInactive = "inactive_sgOne";
    } else if (class_select === "container_atlantis") {
        finalClassActive = "active_atlantis";
        finalClassInactive = "inactive_atlantis";
    }
    
    return<button
    className={state && check === arg ? styles[finalClassActive] : styles[finalClassInactive]} 
    onClick={() => func(arg, number)}
    >{text}</button>
}