import styles from './info.module.css'

import { getInfoSgOneData } from '../../sharedFunc/infoData/getInfoSgOneData'

import { useRef, useState } from 'react'

type info = {
    class_select: string;
}

export const Info = ({class_select}:info) => {
    const headContainer = useRef(null);
    console.log(class_select);
    const [ showItems, setShowItems ] = useState<any>([]);
    if (class_select === "sgOne" && showItems.length === 0) {
        const item = getInfoSgOneData(2);
        if (item !== null) setShowItems(getInfoSgOneData(2));
    };

    console.log(showItems);

    return<div className={styles[`container${class_select}`]}
    ref={headContainer}>
        <h1>info</h1>
    </div>
}