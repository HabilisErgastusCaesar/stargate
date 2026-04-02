import styles from './stargateBiggerLayoutContainer.module.css'

import { Episode } from "./containers/episode"
import { Cast } from './containers/cast'
import { Info } from './containers/info'

type bigger = {
    select_serie: string;
}

export const StargateBiggerLayoutContainer = ({ select_serie }:bigger) => {
    return <div className={styles[`container_${select_serie}`]}>
        <section>
            <Episode class_select={select_serie} />
        </section>
        <section>
            <Cast class_select={select_serie} />
        </section>
        <section>
            <Info class_select={select_serie} />
        </section>
    </div>
}