import styles from './info.module.css'

type info = {
    class_select: string;
}

export const Info = ({class_select}:info) => {
    return<div>
        <h1>info</h1>
    </div>
}