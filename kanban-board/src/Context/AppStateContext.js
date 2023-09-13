import React, { createContext, useEffect, useState } from "react";

export const AppStateContext = createContext();

export const AppStateProvider = (props) => {

    const defaultState = {
        grouping: "status",
        ordering: "priority",
    };

    const savedState = JSON.parse(localStorage.getItem("displayOptions"));
    const [AppState, setAppState] = useState(savedState || defaultState);
    
    const updateAppState = (grouping, ordering) => {
        const newSelection = { grouping, ordering };
        setAppState(newSelection);
        localStorage.setItem("displayOptions", JSON.stringify(newSelection));
    };
    
    useEffect(() => {
        console.log("AppState provider loaded...");
    }, []);

    return (
        <AppStateContext.Provider value={{AppState, updateAppState}}>
            {props.children}
        </AppStateContext.Provider>
    );
};