import styles from './biggerScreenNavigation.module.css'
import { useEffect } from 'react';

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

    useEffect(() => {
        const episodeButton = document.getElementById("episodeButton");
        const episodeContainer = document.getElementById("episodeContainer");
        const castButton = document.getElementById("castButton");
        const castContainer = document.getElementById("castContainer");
        const infoButton = document.getElementById("infoButton");
        const infoContainer = document.getElementById("infoContainer");
        if (episodeButton && castButton && infoButton) {
            if (episodeContainer && castContainer && infoContainer) {
                const totalHeight = episodeContainer.clientHeight + castContainer.clientHeight + infoContainer.clientHeight;
                const setHeight = (container:number, style:any) => {
                    const heightPercentage = (100 / totalHeight) * container;
                    style = `${heightPercentage}%`;
                }
                setHeight(episodeContainer.clientHeight, episodeButton.style.height);
                setHeight(castContainer.clientHeight, castButton.style.height);
                setHeight(infoContainer.clientHeight, infoButton.style.height);
            }
        }
        return () => {};
    },[]);

    return <div className={styles[`nav_${class_select}`]}>
        <section>
            <button id="episodeButton" onClick={() => scrollToRef(episode)}>episode</button>
            <button id="castButton" onClick={() => scrollToRef(cast)}>cast</button>
            <button id="infoButton" onClick={() => scrollToRef(info)}>info</button>
        </section>
    </div>
}