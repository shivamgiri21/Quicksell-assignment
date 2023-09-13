import { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";

const Home = () => {
    const [data] = useContext(DataContext)
    useEffect(()=>{
        console.log(data)
    })
    return(
        <>
            Home
        </>
    );
}

export default Home;