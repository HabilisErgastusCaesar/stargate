import styles from './sgOneLayout.module.css'
import { Cast } from '../containers/cast'
import { Episode } from '../containers/episode'
import { Info } from '../containers/info'

export const SgOneLayout = ({select}:{select:string}) => {
    return<div className={styles.container}>
        {select === "cast" && <Cast />}
        {select === "episode" && <Episode class_select='sgOne_episode'/>}
        {select === "info" && <Info />}
        </div>
}