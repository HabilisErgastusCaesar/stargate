import styles from './showNumberEpisodes.module.css'

import { ShowEpisodesList } from './showEpisodeList'

type show = {
    class_select: string;
    setOpen: React.Dispatch<React.SetStateAction<any>>;
    open: any | string;
}

export const ShowNumberEpisodes = ({class_select, open, setOpen}:show) => {
    const setClose = () => {
        setOpen("");
    }

    const setWindow = () => {
        if (typeof open === "object") return open[0]
        return ''
    }
    
    const showWindow = setWindow();
    
    return <div className={styles[`container_${class_select}`]}
    onClick={() => setClose()}>
        <section>
            <section>
                {open.map((item:any, index:number) => {
                    if (item === "all" || item.includes("select") || item.includes("from")) {
                        return <button key={index}>{index + 1}</button>
                    }
                })}
            </section>
            {showWindow !== '' && <ShowEpisodesList class_select={class_select} />}
        </section>
    </div>
}