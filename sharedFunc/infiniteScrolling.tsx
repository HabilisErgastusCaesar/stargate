import { useEffect, useState } from "react";

import { setEpisodeNumber } from "./adjustShowNumber/setEpisodeNumber";
import { setCastNumber } from "./adjustShowNumber/setCastNumber";

type scroll = {
    showItems: any;
    getItems: any;
    setShowItems: React.Dispatch<React.SetStateAction<any>>;
    headContainer: any;
    numberAdd: number | undefined | null;
    selectType: string;
}

export const infiniteScrolling = ({
    showItems, getItems, setShowItems, headContainer, numberAdd, selectType
}:scroll) => {
    const [ windowSize, setWindowSize ] = useState({
        small: false,
        medium: false,
        big: false
    });


    const throttle = (func: Function, limit: number) => {
        let lastFunc: any;
        let lastRan: number | null = null;
    
        return function(this: any, ...args: any[]) {
            const context = this;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                if ((Date.now() - (lastRan as number)) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - (lastRan as number)));
            }
        };
    }

    const pushNewEpisodes = (type: string) => {
        const length = showItems.length;
        const add = () => {
            console.log(numberAdd)
            const setSelectType = () => {
                if (selectType === "Episode") {
                    return setEpisodeNumber(windowSize, setWindowSize, "add");
                } else if (selectType === "Cast") {
                    return setCastNumber();
                } else if (selectType === "Info") {

                };
            }
            
            const newNumber = setSelectType();

            const adding = getItems.slice(0, length + newNumber);
            setShowItems([...adding]);
        }

        const adjust = () => {
            const setSelectType = () => {
                if (selectType === "Episode") {
                    return setEpisodeNumber(windowSize, setWindowSize, "adjust");
                } else if (selectType === "Cast") {
                    return setCastNumber();
                } else if (selectType === "Info") {

                };
            }
            
            const newNumber = setSelectType();

            if (showItems.length !== newNumber && newNumber !== null) {
                const adding = getItems.slice(0, newNumber);
                setShowItems([...adding]);
            }
        }
        
        if (type === "add") {
            add();
        } else if (type === "adjust") {
            adjust();
        }
    }

    useEffect(() => {
        const element = headContainer.current;

        if (!element) return;

        const scrolling = throttle(() => {
            const clientHeight = element.clientHeight;
            const scrollHeight = element.scrollHeight;
            const scrollTop = element.scrollTop;
            
            const scrollableHeight = scrollHeight - clientHeight;

            if (scrollTop >= scrollableHeight - 200) {
                if (showItems.length < getItems.length) {
                    pushNewEpisodes("add");
                };
            };
        }, 400);

        const seizing =  throttle(() => {
            pushNewEpisodes("adjust");
        }, 400);

        element.addEventListener("scroll", scrolling);
        window.addEventListener("resize", seizing);
        
        return () => {
            element.removeEventListener("scroll", scrolling);
            element.removeEventListener("resize", seizing);
        };
    }, [showItems, window]);

}