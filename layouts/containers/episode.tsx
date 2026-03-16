import styles from './episode.module.css'

type episode = {
    class_select: string;
}

export const Episode = ({class_select}:episode) => {
    const getData = fetch(`/api/${class_select}`);
    console.log(getData)
    
    return<div>
        <h1>episode</h1>
    </div>
}