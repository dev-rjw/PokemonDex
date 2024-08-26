import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    const addPokemon = (pokemon) => {};

    const removePokemon = (pokemon) => {
        {
            /* 제거는 필터를 이용해 봅시다 */
        }
    };

    return (
        <div>
            <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={removePokemon} />
            <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
        </div>
    );
}

export default Dex;
