export const setCastNumber = () => {
    if (window.innerWidth >= 1200) {
        return 12;
    } else if (window.innerWidth >= 1000) {
        return 9;
    } else if (window.innerWidth >= 800) {
        return 6;
    }

    return 3;
};