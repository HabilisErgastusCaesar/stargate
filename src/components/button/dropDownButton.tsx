import styles from './dropDownButton.module.css'

type navButton = {
    text: string;
    state: Boolean;
    check: string;
    func: (arg:string, number:number) => void;
    arg: string;
    number: number;
}

export const DropDownButton = ({text, state, check, func, arg, number}:navButton) => {
    return<button
    className={state && check === arg ? styles.active : styles.inactive} 
    onClick={() => func(arg, number)}
    >{text}</button>
}