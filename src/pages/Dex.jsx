import { createContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

export const DexContext = createContext();

function Dex() {
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    const addPokemon = (pokemon) => {
        if (selectedPokemon.length >= 6) {
            alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
            return;
        }

        if (selectedPokemon.filter((element) => element.id === pokemon.id).length !== 0) {
            alert("이미 선택된 포켓몬입니다.");
            return;
        }

        setSelectedPokemon([...selectedPokemon, pokemon]);
    };

    const removePokemon = (pokemon) => {
        const filteredPokemon = selectedPokemon.filter((element) => {
            return element.id !== pokemon.id;
        });

        setSelectedPokemon(filteredPokemon);
    };

    return (
        <DexContext.Provider value={{ addPokemon, removePokemon }}>
            <Dashboard selectedPokemon={selectedPokemon} />
            <PokemonList />
        </DexContext.Provider>
    );
}

export default Dex;
