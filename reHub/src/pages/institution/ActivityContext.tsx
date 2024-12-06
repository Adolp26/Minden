// src/ActivityContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Definindo o tipo para os dados da atividade
interface ActivityData {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
}

// Definindo o contexto
const ActivityContext = createContext<{
    activities: ActivityData[];
    addActivity: (activity: ActivityData) => void;
} | null>(null);

// Provedor do contexto
export const ActivityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activities, setActivities] = useState<ActivityData[]>([]);

    const addActivity = (activity: ActivityData) => {
        setActivities((prevActivities) => [...prevActivities, activity]);
    };

    return (
        <ActivityContext.Provider value={{ activities, addActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};

// Hook para usar o contexto
export const useActivity = () => {
    const context = useContext(ActivityContext);
    if (!context) {
        throw new Error('useActivity must be used within an ActivityProvider');
    }
    return context;
};