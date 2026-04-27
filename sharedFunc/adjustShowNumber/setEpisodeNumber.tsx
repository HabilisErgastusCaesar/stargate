export const setEpisodeNumber = (
    windowSize: any,
    setWindowSize: React.Dispatch<React.SetStateAction<any>>,
    type: string
) => {
    console.log(windowSize)
    if (typeof window === undefined) return null;
    if (window.innerWidth >= 1200 && !windowSize.big) {
        if (!windowSize.small) {
            setWindowSize({
              big: true,
              medium: true,
              small: true  
            });
        }
        return 9;
    } else if (window.innerWidth >= 800 && !windowSize.medium) {
        if (!windowSize.small) {
            setWindowSize({
              big: false,
              medium: true,
              small: true
            });
        }
        return 6;
    } else if (window.innerWidth >= 0 && !windowSize.small) {
        if (!windowSize.small) {
            setWindowSize({
              big: false,
              medium: false,
              small: true  
            });
        }
        return 3;
    }
    
    return null;
};