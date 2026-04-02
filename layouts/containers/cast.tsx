import styles from './cast.module.css'

import { useCastContext } from '../../Context/castContext'
import { CastNumber } from '../../components/button/castNumber'
import { ShowNumberEpisodes } from '../showNumberEpisodes/showNumberEpisodes'

import { useState, useEffect, useRef } from 'react'

type cast = {
    class_select: string;
}

type item = {
    id: string;
    name: string;
    rol: string;
    numberOfEpisodesAtlantis: number;
    numberOfEpisodesSgOne: number;
    numberOfEpisodesUniverse: number;
    yearsActive: string[];
    sgOneSeasonOne: string;
    sgOneSeasonTwo: string;
    sgOneSeasonThree: string;
    sgOneSeasonFor: string;
    sgOneSeasonFive: string;
    sgOneSeasonSix: string;
    sgOneSeasonSeven: string;
    sgOneSeasonEight: string;
    sgOneSeasonNine: string;
    sgOneSeasonTen: string;
    atlantisSeasonOne: string;
    atlantisSeasonTwo: string;
    atlantisSeasonThree: string;
    atlantisSeasonFor: string;
    atlantisSeasonFive: string;
    universeSeasonOne: string;
    universeSeasonTwo: string;
    sgOne: boolean;
    atlantis: boolean;
    universe: boolean;
    img: string;
}

export const Cast = ({class_select}:cast) => {
    const { selection, setCast } = useCastContext();
    const headContainer = useRef(null);

    const [ getCast, setGetCast ] = useState([...selection(class_select)]) ?? [];
    const [ showCast, setShowCast ] = useState<item[]>([]);
    const [ open, setOpen ] = useState("");

    const getData = () => {
        const fetchData = async() => {
            const data = await fetch(`/api/cast?data=${encodeURIComponent(class_select)}`,{
                method: "GET"
            });
            return await data.json();
        }

        const responseData = async() => {
            const response = await fetchData();
            return response
        }
        responseData()
        .catch((error) => console.log(error))
        .then((item) => {
            setGetCast([...item]);
            setCast((prev: item[]) => {
                const newData = prev;
                const filtered =  newData.filter((filt:any) => filt[class_select] === true);
                if (filtered.length === 0) {
                    newData.push(...item)
                }
                return [...newData];
            })
            setShowCast([...item.slice(0, 3)]);
        })
    }

    if (getCast.length === 0) {
        getData();
    } else if (showCast.length === 0) {
        setShowCast([...getCast.slice(0, 3)]);
    }

    const scroll = () => {

    }

    useEffect(() => {
        console.log(headContainer.current);

        return () => {}
    },[]);

    

    return<div className={styles[`container_${class_select}`]}
    ref={headContainer}>
        <h3>cast</h3>
        <section className={styles.items_container}>
        {open !== "" && <ShowNumberEpisodes class_select={class_select} open={open} setOpen={setOpen} />}
        {showCast.map((item: item) => {
            return <section key={item.id}>
                <h4>{item.name}</h4>
                <CastNumber class_select={class_select} item={item} setOpen={setOpen} />
                <img src={item.img} alt='' />
                <h4>{item.rol}</h4>
            </section>
        })}
        </section>
    </div>
}