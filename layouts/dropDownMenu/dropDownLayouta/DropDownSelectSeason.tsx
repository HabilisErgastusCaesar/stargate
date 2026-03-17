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

    const setNavigation = (index:number) => {
        const select_link = () => {
            if (Class === "container_atlantis") {
                return "atlantis";
            } else if (Class === "container_universe") {
                return "universe";
            }
            return "";
        }
        
        const linked = select_link();
        
        if (linked === "") {
            router.push(`/season${index}`);
        } else {
            router.push(`/${linked}/season${index}`);
        }
    }

    return <div className={styles[Class]} onClick={() => setState((prev:any) => ({
            ...prev,
            open: false,
            class: class_select,
        }))}>
        <label>seasons</label>
        {seasons.map((item, index) => {
            if (index < number) {
                return <section key={index}>
                    <section className={styles.seasons}>
                            <button onClick={() => setNavigation(index + 1)}>{item}</button>
                    </section>
                    </section>
            }
        })}
        <label>rest</label>
        <section className={styles.castInfo}>
            <button>cast</button>
            <button>info</button>
        </section>
    </div>
}