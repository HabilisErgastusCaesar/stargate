import styles from './DropDownSelectSeason.module.css'

type dropDown = {
    number: number;
    Class: string;
    setState: React.Dispatch<React.SetStateAction<any>>;
}

export const DropDownSelectSeason = ({number, Class, setState}:dropDown) => {
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
    return <div className={styles[Class]} onClick={() => setState((prev:any) => ({
                    ...prev,
                    open: false,
                }))}>
        {seasons.map((item, index) => {
            if (index < number) {
                return <section key={index}>
                    <section className={styles.seasons}>
                        <label>{item}</label>
                    </section>
                    </section>
            }
        })}
    </div>
}