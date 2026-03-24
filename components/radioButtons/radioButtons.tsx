import { OptionCheckBox } from "../input/optionCheckBox"

export const RadioButtons = ({radio_array}:any) => {
    return <div>
        <fieldset>
            {radio_array?.map((item:string, index:number) => {
                return <span key={index}>
                        <label>{item}</label>
                        <OptionCheckBox />
                </span>
            })}
        </fieldset>
    </div>
}