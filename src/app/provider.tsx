"use client";

import React from "react";
import { StargateProvider } from "../../Context/episodeContext";
import { CastProvider } from "../../Context/castContext";

interface providerProps {
    children: React.ReactNode;
}

export function Provider({children}: providerProps) {
    return <StargateProvider>
        <CastProvider>
            {children}
        </CastProvider>
    </StargateProvider>
}