import { createContext, useContext, useMemo, useState, ReactNode } from "react";

const castContext = createContext<{
    selection: (series: string) => any;
    setCast: React.Dispatch<React.SetStateAction<any>>
} | undefined>(undefined);

interface ProviderProps {
    children: ReactNode; 
}

export const CastProvider = ({ children }:ProviderProps) => {
    const [ cast, setCast ] = useState([

    ]);

    const selection = (series: string) => useMemo(() => {
        return cast.filter((item) => item[series] === true);
    }, []);

    return (
        <castContext.Provider value={{selection, setCast}}>
            {children}
        </castContext.Provider>
    )
}

export const useCastContext = () => {
    const Context = useContext(castContext);
    if (!Context) {
        throw new Error("Haha sukkel je maakt een fout");
    }
    return Context;
}