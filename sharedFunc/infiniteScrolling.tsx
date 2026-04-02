import { useEffect } from "react";

type scroll = {
    showItems: any;
    getItems: any;
    setShowItems: React.Dispatch<React.SetStateAction<any>>;
    headContainer: any;
}

export const infiniteScrolling = ({showItems, getItems, setShowItems, headContainer}:scroll) => {
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

    const pushNewEpisodes = () => {
        const length = showItems.length;
        const adding = getItems.slice(0, length + 5);
        setShowItems([...adding]);
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
                    pushNewEpisodes();
                };
            };
        }, 400);

        element.addEventListener("scroll", scrolling);
        
        return () => {
            element.removeEventListener("scroll", scrolling);
        };
    }, [showItems]);
}