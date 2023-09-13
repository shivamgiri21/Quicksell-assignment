import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [data, setData] = useState({
        tickets: [],
        users: [],
    });

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        console.log("Data provider loaded...");
    }, []);

    return (
        <DataContext.Provider value={{data, setData, isLoaded, setIsLoaded}}>
            {props.children}
        </DataContext.Provider>
    );
};