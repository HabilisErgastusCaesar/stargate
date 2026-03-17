"use client";

import React from "react";
import { StargateProvider } from "../../Context/episodeContext";

interface providerProps {
    children: React.ReactNode;
}

export function Provider({children}: providerProps) {
    return <StargateProvider>
        {children}
    </StargateProvider>
}