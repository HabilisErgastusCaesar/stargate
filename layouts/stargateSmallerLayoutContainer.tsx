import styles from './stargateSmallerLayoutContainer.module.css'
import { NavButtonsLayout } from './navButtonLayout/navButtonLayout'
import { Cast } from './containers/cast'
import { Episode } from './containers/episode'
import { Info } from './containers/info'

import { useState } from 'react'

type smaller = {
    select_serie: string;
}

export const StargateSmallerLayoutContainer = ({select_serie}:smaller) => {
    const [ select, setSelect ] = useState<string>("episode");

    return <div className={styles[`container_${select_serie}`]}>
        <NavButtonsLayout select={select} setSelect={setSelect} class_select={select_serie} />
        <div className={styles.items_container}>
            {select === "cast" && <Cast class_select={select_serie} />}
            {select === "episode" && <Episode class_select={select_serie}/>}
            {select === "info" && <Info class_select={select_serie} />}
        </div>
    </div>
}