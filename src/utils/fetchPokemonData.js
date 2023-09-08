import axios from 'axios';
import { API } from './api';
import { calculatePower } from './calculatePower';

export async function fetchPokemonData(setData, setLoading, setConnectionErr) {
    setLoading(true);

    try {
        const response = await axios.get(API);
        const updatedData = response.data.map((pokemon) => ({
            ...pokemon,
            power: calculatePower(pokemon),
        }));
        setData(updatedData);
        setConnectionErr(false);
    } catch (error) {
        setConnectionErr(true);
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
    }
}
