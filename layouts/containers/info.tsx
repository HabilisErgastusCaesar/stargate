import styles from './info.module.css'

import { getInfoSgOneData } from '../../sharedFunc/infoData/getInfoSgOneData'
import { getInfoAtlantisData } from '../../sharedFunc/infoData/getInfoAtlantisData'
import { getInfoUniverseData } from '../../sharedFunc/infoData/getInfoUniverseData'
import { infiniteScrolling } from '../../sharedFunc/infiniteScrolling'
import { DialingScreenContainer } from '../dialingScreenContainer/dialingScreenContainer'

import { useRef, useState, useEffect } from 'react'

type info = {
    class_select: string;
}

type show = {
    title: string;
    info: string;
    list: string[] | [];
    list_items: string[] | [];
}

export const Info = ({class_select}:info) => {
    const headContainer = useRef(null);
    const [ showItems, setShowItems ] = useState<show[] | undefined>([]);
    const [ getItems, setGetItems ] = useState<any>([]);
    const numberAdd = 2;
    const selectType = "Info";

    const getSgOneData = (selection:number | string) => {
        setShowItems(getInfoSgOneData(selection));
        if (typeof selection === 'number') setGetItems(getInfoSgOneData("all"));
    };
    
    const getAtlantisData = (selection:number | string) => {
        setShowItems(getInfoAtlantisData(selection));
        if (typeof selection === 'number') setGetItems(getInfoAtlantisData("all"));
    };

    const getUniverseData = (selection:number | string) => {
        setShowItems(getInfoUniverseData(selection));
        if (typeof selection === 'number') setGetItems(getInfoUniverseData("all"));
    };

    const getData = (selection:number | string) => {
        switch (class_select) {
            case "sgOne":
                getSgOneData(selection);
                break;
            case "atlantis":
                getAtlantisData(selection);
                break;
            case "universe":
                getUniverseData(selection);
                break;
            default: null;
        }
    }

    if (typeof window !== "undefined") {
        if (window.innerWidth <= 1500 && (showItems as show[]).length === 0) {
            getData(2);
        } else if ((showItems as show[]).length === 0) {
            getData("all");
        }
    };

    const throttle = (func:any, limit: number) => {
        let lastFunc: any;
        let lastRun: number | null = null;

        return function(this: any, ...args: any[]) {
            const context = this;
            if (!lastRun) {
                func.apply(context, args);
                lastRun = Date.now();
            } else {
                clearTimeout(lastRun);
                lastFunc = setTimeout(() => {
                    if ((Date.now() - (lastRun as number) >= limit)) {
                        func.apply(context, args);
                        lastRun = Date.now();
                    }
                }, limit - (Date.now() - (lastRun as number)));
            }
        }
    }

    useEffect(() => {
        const resize = throttle(() => {
            if (window.innerWidth <= 1500 && (showItems as show[]).length === 0) {
                getData(2);
                if (getItems.length > 0) {
                    setGetItems([]);
                }
            } else if ((showItems as show[]).length === 0) {
                getData("all");
            }
        }, 400);

        if (typeof window !== "undefined") {
            window.addEventListener("resize", resize);
        }
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [getItems]);

    infiniteScrolling({showItems, getItems, setShowItems, headContainer, numberAdd, selectType});

    return<div className={styles[`container_${class_select}`]}
        ref={headContainer} id="infoContainer">
        {class_select === "sgOne" && <DialingScreenContainer />}
        {showItems?.map((item, index) => {
            return <section key={index}>
                {item.title !== "" && <h3>{item.title}</h3>}
                {item.info !== "" && <p>{item.info}</p>}
                {item.list.length > 0 && <ul>
                    {item.list.map((itm,idx) => {
                    return <li key={idx}>{itm}</li>
                })}</ul>}
                {item.list_items.length > 0 && <ul>
                    {item.list_items.map((itm, idx) => {
                        return <li key={idx}>{itm}</li>
                    })}
                    </ul>}
            </section>
        })}
    </div>
}