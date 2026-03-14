import styles from './episode.module.css'

type episode = {
    class_select: string;
}

export const Episode = ({class_select}:episode) => {
    return<div>
        <h1>episode</h1>
    </div>
}