import { createContext, useContext, useMemo, useState, ReactNode } from "react";

const stargateContext = createContext<{
  selection: (series: string, type: string) => any;
  setSelection: (series: string) => React.Dispatch<React.SetStateAction<any>> | null;
} | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const StargateProvider = ({ children }:ProviderProps) => {
    type SgOneType = 
        | "Season1" | "Season2" | "Season3" | "Season4" | "Season5"
        | "Season6" | "Season7" | "Season8" | "Season9" | "Season10";

    type AtlantisType = 
        | "Season1" | "Season2" | "Season3" | "Season4" | "Season5";

    type UniverseType = 
        | "Season1" | "Season2";

    const [ sgOne, setSgOne ] = useState<Record<SgOneType, any[]>>({
        Season1: [],
        Season2: [],
        Season3: [],
        Season4: [],
        Season5: [],
        Season6: [],
        Season7: [],
        Season8: [],
        Season9: [],
        Season10: [],
    });
    const [ atlantis, setAtlantis ] = useState<Record<AtlantisType, any[]>>({
        Season1: [],
        Season2: [],
        Season3: [],
        Season4: [],
        Season5: [],
    });
    const [ universe, setUniverse ] = useState<Record<UniverseType, any[]>>({
        Season1: [],
        Season2: [],
    });

    const selection = (series: string, type: string) => useMemo(() => {
        switch(series) {
            case "sgOne": 
                return sgOne[type as SgOneType];
            case "atlantis":
                return atlantis[type as AtlantisType];
            case "universe":
                return universe[type as UniverseType];
            default: 
                return null;
        }
    }, [sgOne, atlantis, universe]);

    const setSelection = (series: String)  => {
        switch(series) {
            case "sgOne":
                return setSgOne;
            case "atlantis":
                return setAtlantis;
            case "universe":
                return setUniverse;
            default: return null;
        }
    }

    return (
        <stargateContext.Provider value={{ selection, setSelection }}>
            {children}
        </stargateContext.Provider>
    )
}

export const useStargateContext = () => {
    const Context = useContext(stargateContext);
    if (!Context) {
        throw new Error("useStargateContext must be used within a StargateProvider");
    }
    return Context;
};