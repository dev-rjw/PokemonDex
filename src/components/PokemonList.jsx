import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../mock";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(150px, 1fr));
    gap: 20px;
    background-color: rgb(240, 240, 240);
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
`;

const PokemonList = () => {
    const pokemonList = MOCK_DATA;

    return (
        <ListContainer>
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={false} />
            ))}
        </ListContainer>
    );
};

export default PokemonList;
