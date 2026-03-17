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
    const newClass = class_select.replace("container_","");
    
    return<button
    className={state && check === arg ? styles[`active_${newClass}`] : styles[`inactive_${newClass}`]} 
    onClick={() => func(arg, number)}
    >{text}</button>
}