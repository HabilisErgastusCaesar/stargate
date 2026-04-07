import { useEffect } from "react";

type window = {
    setWindowSize: React.Dispatch<React.SetStateAction<any>>;
    windowSizeSelect: Boolean;
}

export const setjustWindowSize = ({setWindowSize, windowSizeSelect}:window) => {
    if (typeof window !== "undefined") {
        if (window.innerWidth >= 1500 && windowSizeSelect) {
            setWindowSize({smallerOrBigger : false});
        }
    };
    
    const throttle = (func: Function, limit: number) => {
        let lastFunc: any;
        let lastRan: number | null = null;

        return function(this: any, ...arg: any[]) {
            const context = this;
            if (!lastRan) {
                func.apply(context, ...arg);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if ((Date.now() - (lastRan as number)) >= limit) {
                        func.apply(context, arg);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - (lastRan as number)));
            }
        }
    };

    const adjustWindowSize = throttle(() => {
        if (typeof window !== undefined) {
            if (window.innerWidth >= 1500 && windowSizeSelect) {
                setWindowSize({smallerOrBigger : false});
            } else if (!windowSizeSelect) {
                setWindowSize({smallerOrBigger : true});
            }
        }
    }, 400);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", adjustWindowSize);
        }

        return () => {
            window.removeEventListener("resize", adjustWindowSize);
        }
    }, [windowSizeSelect]);
}