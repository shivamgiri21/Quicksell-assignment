import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";

const AppWrapper = (props) => {
    const [data, setData] = useContext(DataContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
              setData(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [])
    return(
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default AppWrapper;