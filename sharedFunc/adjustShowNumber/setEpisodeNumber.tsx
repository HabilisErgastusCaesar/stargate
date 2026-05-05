import { useEffect } from "react";

export const setEpisodeNumber = () => {
    if (typeof window === "undefined") return null;
    if (window.innerWidth >= 1200) {
        return 9;
    } else if (window.innerWidth >= 800) {
        return 6;
    } else if (window.innerWidth >= 0) {
        return 3;
    }
    
    return null;
};