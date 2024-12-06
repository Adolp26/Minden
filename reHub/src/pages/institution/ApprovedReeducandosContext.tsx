// src/pages/institution/ApprovedReeducandosContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Definindo o tipo para os dados do reeducando
interface Reeducando {
    name: string;
    idade: string;
}

// Definindo o contexto
const ApprovedReeducandosContext = createContext<{
    reeducandos: Reeducando[];
    addReeducando: (reeducando: Reeducando) => void;
} | null>(null);

// Provedor do contexto
export const ApprovedReeducandosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [reeducandos, setReeducandos] = useState<Reeducando[]>([]);

    const addReeducando = (reeducando: Reeducando) => {
        setReeducandos((prevReeducandos) => [...prevReeducandos, reeducando]);
    };

    return (
        <ApprovedReeducandosContext.Provider value={{ reeducandos, addReeducando }}>
            {children}
        </ApprovedReeducandosContext.Provider>
    );
};

// Hook para usar o contexto
export const useApprovedReeducandos = () => {
    const context = useContext(ApprovedReeducandosContext);
    if (!context) {
        throw new Error('useApprovedReeducandos must be used within an ApprovedReeducandosProvider');
    }
    return context;
};