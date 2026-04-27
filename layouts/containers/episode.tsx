import styles from './episode.module.css'
import { useStargateContext } from '../../Context/episodeContext';
import { infiniteScrolling } from '../../sharedFunc/infiniteScrolling';
import { DialingScreenContainer } from '../dialingScreenContainer/dialingScreenContainer';
import { setEpisodeNumber } from '../../sharedFunc/adjustShowNumber/setEpisodeNumber';

import { useState, useRef, useEffect } from 'react'
import { usePathname } from "next/navigation";

type episode = {
    class_select: string;
}

export const Episode = ({class_select}:episode) => {
    const asPath = usePathname();
    let number:number | string = 1;
    if (asPath.includes("season")) {
        number = parseInt(asPath
            .replace("/atlantis/season","")
            .replace("/universe/season","")
            .replace("/season","")
        )
    }
    const { selection, setSelection }:any = useStargateContext();
    if (typeof window === undefined) return <h1></h1>
    const [ showItems, setShowItems ] = useState<HTMLElement[]>([]) ?? [];
    const getItems = [...selection(class_select,`Season${number}`)];
    const headContainer = useRef<HTMLDivElement>(null);
    const [ windowSize, setWindowSize ] = useState({
        small: false,
        medium: false,
        big: false
    });
    const numberAdd = setEpisodeNumber(windowSize, setWindowSize, "add");
    const selectType = "Episode";
    
    const getData = () => {
        const fetchData = async() => {
            const data = await fetch(`/api/${class_select}?data=${encodeURIComponent(number)}`,{
                method: "GET"
            });
            return await data.json();
        };

        const responseData = async() => {
            const response = await fetchData();
            return response
        };

        responseData().catch((error => {
            console.log(error);
        })).then(item => {
            setSelection(class_select)((prev:any) => {
                const newData = {...prev};
                if (newData[`Season${number}`].length === 0) {
                    newData[`Season${number}`].push(...item);
                }
                return {...newData};
            });
            if (window.innerWidth < 1500) {
                setShowItems([...item.slice(0,numberAdd)]);
                getItems.push(...item);
            } else {
                setShowItems([...item]);
                getItems.push(...item);
            }
        })
    };

    if (getItems.length === 0) {
        getData();
    } else if (showItems.length === 0) {
        if (window.innerWidth < 1500) {
            setShowItems([...getItems.slice(0,3)]);
        } else {
            setShowItems([...getItems]);
        }
    };

    infiniteScrolling({
        showItems, getItems, setShowItems, 
        headContainer, numberAdd, selectType
    });
    

    return<div className={styles[`container_${class_select}`]}
    ref={headContainer}>
        <div className={styles.items_container}>
            <section className={styles.header}> 
                <h3>stargate {class_select.replace("sgOne","sg-1")}</h3>
                <h3>season {number}</h3>
            </section>
        <div className={styles.grid_container}>
            {class_select === "sgOne" && <span>
                    <DialingScreenContainer />
                </span>}
            {showItems.map((item: any, index) => {
                return <div key={item.id} className={styles.item}>
                    <h4>E{index + 1} {item.name}</h4>
                    <p>{item.description}</p>
                    <img src={item.img} alt="" />
                    <span></span>
                    <h4>{item.airDate}</h4>
                </div>
            })}
        </div>
        </div>
    </div>
}