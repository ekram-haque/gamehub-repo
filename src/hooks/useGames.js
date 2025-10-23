import axios from "axios";
import { useEffect, useState } from "react";



const useGames = () =>{
    const [games ,setGames] = useState([])

    useEffect(() =>{
        axios('/games.json')
        
        .then(data => setGames(data.data))
    },[])
    return{games}
}
export default useGames;