import styles from './navButtonLayout.module.css'

import { useRouter, usePathname } from 'next/navigation'


type navButton = {
    select: string;
    setSelect: React.Dispatch<React.SetStateAction<string>>;
    class_select: string;
}

export const NavButtonsLayout = ({select, setSelect, class_select}:navButton) => {
    const router = useRouter();
    const asPath = usePathname();
    const navSelect = (nav: string) => {
        event?.preventDefault();
        const select_link = () => {
            if (asPath.includes("atlantis")) {
                return "atlantis";
            } else if (asPath.includes("universe")) {
                return "universe";
            }
            return "";
        };

        const selectPrevIndex = () => {
            return parseInt(asPath
                .replace("/atlantis/season","")
                .replace("/universe/season","")
                .replace("/season","")
            )
        };

        const linked = select_link();

        const prevIndex = selectPrevIndex();

        if (linked === "") {
            router.push(`/season${prevIndex}&${nav}`);
        } else {
            router.push(`/${linked}/season${prevIndex}&${nav}`);
        };
    };
    
    return <section className={styles.head}>
        <section className={styles.filler}/>
        <section className={styles[class_select]}>
        <button 
        className={select === "cast" ? styles.button_select : styles.button_unselect}
        onClick={() => navSelect("Cast")}>
            cast
        </button>
        <button 
        className={select === "episode" ? styles.button_select : styles.button_unselect}
        onClick={() => navSelect("Episode")}>
            episode
        </button>
        <button 
        className={select === "info" ? styles.button_select : styles.button_unselect}
        onClick={() => navSelect("Info")}>
            info
        </button>
    </section>
    <section className={styles.filler}/>
    </section>
}