import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";
import { makeGETRequest } from "./Utils/Api";


const AppWrapper = (props) => {
    const { setData, setIsLoaded} = useContext(DataContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await makeGETRequest("https://api.quicksell.co/v1/internal/frontend-assignment");
              setData(response);
              setIsLoaded(true);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        fetchData();
    },[])
    return(
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default AppWrapper;