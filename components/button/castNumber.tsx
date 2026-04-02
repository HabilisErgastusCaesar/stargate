import styles from './castNumber.module.css'

type cast = {
    class_select: string;
    item: any;
    setOpen: React.Dispatch<React.SetStateAction<any>>
}

export const CastNumber = ({class_select, item, setOpen}:cast) => {
    let number = null;

    switch (class_select) {
        case "sgOne":
            number = item.numberOfEpisodesSgOne;
            break;
            case "atlantis":
            number = item.numberOfEpisodesAtlantis;
            break;
            case "universe":
            number = item.numberOfEpisodesUniverse;        
            break;
            default: null;
    };
    
    if (number === null) {
        return <p>null</p>
    };
    

    const selectOpen = () => {
        let selection = ""
        const sgOne = () => {
            setOpen([
                item.sgOneSeasonOne,
                item.sgOneSeasonTwo,
                item.sgOneSeasonThree,
                item.sgOneSeasonFor,
                item.sgOneSeasonFive,
                item.sgOneSeasonEight,
                item.sgOneSeasonSix,
                item.sgOneSeasonSeven,
                item.sgOneSeasonNine,
                item.sgOneSeasonTen,
            ])
        }

        const atlantis = () => {
            setOpen([
                item.atlantisSeasonFive,
                item.atlantisSeasonFor,
                item.atlantisSeasonOne,
                item.atlantisSeasonThree,
                item.atlantisSeasonTwo,
            ])
        }

        const universe = () => {
            setOpen([
                item.universeSeasonOne,
                item.universeSeasonTwo
            ])
        }
        
        switch (class_select) {
            case "sgOne":
                sgOne();
                break;
            case "atlantis":
                atlantis();
                break;
            case "universe":
                universe();    
                break;
            default: selection = "";
        }
    }

    return <button className={styles[`button_${class_select}`]} onClick={() => selectOpen()}>
        number of episodes {number}
        </button>
}