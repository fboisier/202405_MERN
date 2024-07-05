import { useParams } from "react-router-dom";
import PokeCard from "../PokeCard";
import useAxios from "../../hooks/useAxios";
import PokeTipo from "../PokeTipo";


const PokemonDetalle = () => {
    
    const { id } = useParams()

    const {data, isLoading} = useAxios(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (isLoading) {
        return <h1>Cargando Pokemon...</h1>
    }

    const {name, types, sprites: {other:{dream_world:{front_default: imagen}}}} = data;

    return (
        <PokeCard nombre={name} foto={imagen}>
            {types.map((type, index) => <PokeTipo key={index} numero={index} type={type.type.name} />)}
        </PokeCard>
    )
}

export default PokemonDetalle