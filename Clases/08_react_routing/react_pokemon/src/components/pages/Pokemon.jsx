import { useState } from "react"
import axios from "axios";
import PokeCard from "../PokeCard";
import PokeTipo from "../PokeTipo";


const Pokemon = () => {

    const [valor, setValor] = useState('')
    const [pokemons, setPokemons] = useState([])

    const handleClickButton = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then((response) => {
                setPokemons([...pokemons, response.data])
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <>
            <main>
                <div className="row">
                    <div className="col-12">
                        <h4>Input de Entrada</h4>
                        <div className="control-propio">
                            <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
                            <button onClick={handleClickButton}>Agregar</button>
                        </div>
                        <hr />
                        <h4>Salida de nuestros textos</h4>
                        <div className="salida">
                            {
                                pokemons.map((pokemon, index) => {
                                    const { name, types, sprites: { other: { dream_world: { front_default: imagen } } } } = pokemon;

                                    return <PokeCard key={index} nombre={name} foto={imagen}>
                                        {types.map((type, indexTipo) => <PokeTipo key={indexTipo} numero={index} type={type.type.name} />)}
                                    </PokeCard>
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Pokemon