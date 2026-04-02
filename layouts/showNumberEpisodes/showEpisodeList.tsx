import styles from './showEpisodeList.module.css'

type show = {
    class_select: string;
    
}

export const ShowEpisodesList = ({class_select}:show) => {
    return <section className={styles[`list_${class_select}`]}>
        {class_select === "sgOne" && <h4>sgOne</h4>}
        {class_select === "atlantis" && <h4>sgOne</h4>}
        {class_select === "universe" && <h4>sgOne</h4>}
    </section>
}