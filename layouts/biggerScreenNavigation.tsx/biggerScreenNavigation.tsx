import styles from './biggerScreenNavigation.module.css'

type bigger = {
    class_select: string;
    episode: React.RefObject<HTMLElement | null>;
    cast: React.RefObject<HTMLElement | null>;
    info: React.RefObject<HTMLElement | null>;
}

export const BiggerScreenNav = ({class_select, episode, cast, info}:bigger) => {
    const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <div className={styles[`nav_${class_select}`]}>
        <section>
            <button onClick={() => scrollToRef(episode)}>episode</button>
            <button onClick={() => scrollToRef(cast)}>cast</button>
            <button onClick={() => scrollToRef(info)}>info</button>
        </section>
    </div>
}