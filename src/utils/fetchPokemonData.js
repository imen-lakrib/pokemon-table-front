import axios from "axios";
import { API } from "./api";
import { calculatePower } from "./calculatePower";

export function fetchPokemonData(setData, setLoading, setConnectionErr) {
    setLoading(true);

    axios.get(API)
        .then((response) => {
            const updatedData = response.data.map((pokemon) => ({
                ...pokemon,
                power: calculatePower(pokemon),
            }));
            setData(updatedData);
            setConnectionErr(false);
        })
        .catch((error) => {
            setConnectionErr(true);
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
}