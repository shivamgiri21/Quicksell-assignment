import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        console.log("Data provider loaded...");
    }, []);

    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    );
};