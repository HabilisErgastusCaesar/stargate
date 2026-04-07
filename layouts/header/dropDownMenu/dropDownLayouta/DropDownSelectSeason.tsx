import styles from './DropDownSelectSeason.module.css'

import { useRouter } from "next/navigation";

type dropDown = {
    number: number;
    Class: string;
    setState: React.Dispatch<React.SetStateAction<any>>;
    class_select: string;
}

export const DropDownSelectSeason = ({number, class_select, Class, setState}:dropDown) => {
    const router = useRouter();
    const seasons = [
        "season 1",
        "season 2",
        "season 3",
        "season 4",
        "season 5",
        "season 6",
        "season 7",
        "season 8",
        "season 9",
        "season 10",
    ]

    const setNavigation = (index:number, selection: string) => {
        event?.preventDefault();
        const select_link = () => {
            if (Class === "container_atlantis") {
                return "atlantis";
            } else if (Class === "container_universe") {
                return "universe";
            }
            return "";
        };

        const selectPrevIndex = () => {
            return 4;
        };
        
        const linked = select_link();
        
        const prevIndex = selectPrevIndex();
        
        if (linked === "") {
            if (selection === "episode") router.push(`/season${index}&Episode`);
            if (selection === "cast") router.push(`/season${prevIndex}&Cast`);
            if (selection === "info") router.push(`/season${prevIndex}&Info`);
        } else {
            if (selection === "episode") router.push(`/${linked}/season${index}&Episode`);
            if (selection === "cast") router.push(`/${linked}/season${prevIndex}&Cast`);
            if (selection === "info") router.push(`/${linked}/season${prevIndex}&Info`);
        }
    }

    return <div className={styles[Class]} onClick={() => setState((prev:any) => ({
            ...prev,
            dropDown: {
                ...prev.dropDown,
                open: false,
                class: class_select,
            }
        }))}>
        <label>seasons</label>
        {seasons.map((item, index) => {
            if (index < number) {
                return <section key={index}>
                    <section className={styles.seasons}>
                            <button onClick={() => setNavigation(index + 1, "episode")}>{item}</button>
                    </section>
                    </section>
            }
        })}
        <label>rest</label>
        <section className={styles.castInfo}>
            <button onClick={() => setNavigation(1, "cast")}>cast</button>
            <button onClick={() => setNavigation(1, "info")}>info</button>
        </section>
    </div>
}