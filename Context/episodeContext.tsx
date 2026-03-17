import { createContext, useContext, useMemo, useState, ReactNode } from "react";

const stargateContext = createContext<({selection: string}) | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const StargateProvider = ({ children }:ProviderProps) => {
    const selection = "kanker";
    const [ sgOne, setSgOne ] = useState({
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
    const [ atlantis, setAtlantis ] = useState({
        Season1: [],
        Season2: [],
        Season3: [],
        Season4: [],
        Season5: [],
    });
    const [ universe, setuniverse ] = useState({
        Season1: [],
        Season2: [],
    });
    return (
        <stargateContext.Provider value={{ selection }}>
            {children}
        </stargateContext.Provider>
    )
}

export const useStargateContext = () => useContext(stargateContext);