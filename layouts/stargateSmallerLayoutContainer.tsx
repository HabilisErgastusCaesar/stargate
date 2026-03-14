import styles from './stargateSmallerLayoutContainer.module.css'
import { NavButtonsLayout } from './navButtonLayout/navButtonLayout'
import { SgOneLayout } from './sgOneLayout/sgOneLayout'

import { useState } from 'react'

type smaller = {
    selection: string;
}

export const StargateSmallerLayoutContainer = ({selection}:smaller) => {
    const [ select, setSelect ] = useState<string>("episode");

    return <div className={styles.container_sgOne}>
        <NavButtonsLayout select={select} setSelect={setSelect} />
        {selection === "sgOne" && <SgOneLayout select={select} />}
    </div>
}