import styles from './episode.module.css'

import { useState } from 'react'

type episode = {
    class_select: string;
}

export const Episode = ({class_select}:episode) => {
    console.log(class_select)
    const [ episodes, setEpisodes ] = useState<HTMLElement[]>([]) ?? []; 

    const getData = () => {
        const fetchData = async() => {
            const data = await fetch(`/api/${class_select}?data=${encodeURIComponent(1)}`,{
                method: "GET"
            });
            return await data.json();
        }

        const responseData = async() => {
            const response = await fetchData();
            return response
        }

        responseData().catch((error => {
            console.log(error);
        })).then(item => {
            setEpisodes(item);
        })

    }

    if (episodes.length === 0) {
        getData();
    }
    

    return<div className={styles[`container_${class_select}`]}>
        <div className={styles.items_container}>
        <h1>stargate {class_select.replace("sgOne","sg-1")}</h1>
        {episodes.map((item: any, index) => {
            console.log(item);
            return <div key={item.id}>
                <h4>episode {index + 1}</h4>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <img src={item.img} />
                <h4>{item.airDate}</h4>
            </div>
        })}

        </div>
    </div>
}