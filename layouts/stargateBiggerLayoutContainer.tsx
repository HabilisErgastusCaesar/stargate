import styles from './stargateBiggerLayoutContainer.module.css'

import { Episode } from "./containers/episode"
import { Cast } from './containers/cast'
import { Info } from './containers/info'
import { BiggerScreenNav } from './biggerScreenNavigation.tsx/biggerScreenNavigation'

import { useRef, useEffect } from 'react'

type bigger = {
    select_serie: string;
}

export const StargateBiggerLayoutContainer = ({ select_serie }:bigger) => {
    const headContainer = useRef(null);
    const episode = useRef<HTMLElement>(null);
    const cast = useRef<HTMLElement>(null);
    const info = useRef<HTMLElement>(null);
    
    return <div className={styles[`container_${select_serie}`]}>
    <div className={styles.display}
    ref={headContainer}>
        <section
        ref={episode}>
            <Episode class_select={select_serie} />
        </section>
        <section
        ref={cast}>
            <Cast class_select={select_serie} />
        </section>
        <section
        ref={info}>
            <Info class_select={select_serie} />
        </section>
    </div>
    <BiggerScreenNav 
        class_select={select_serie}
        episode={episode}
        cast={cast}
        info={info}/>
    </div>
}