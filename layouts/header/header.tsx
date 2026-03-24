import { DropDownMenu } from "./dropDownMenu/dropDownMenu"
import { SearchFilter } from "./searchFilter/searchFilter"

import { useState } from "react"

type header = {
    class_select: string;
}

export const Header = ({class_select}:header) => {
    const [ popup, setPopup ] = useState<any>({
        dropDown: {
        open: false,
        number: 5,
        class: class_select,
        },
        searchState: {
        open: false,
        searchResults: "",
        },
        options: {
        open: false,
        episodes: true,
        cast: false,
        serie: "all",
        },
        class: class_select,
    })
    return <div>
        <DropDownMenu popup={popup} setPopup={setPopup} />
        <SearchFilter popup={popup} setPopup={setPopup} />
    </div>
}