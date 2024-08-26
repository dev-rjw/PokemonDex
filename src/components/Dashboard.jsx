import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import PokemonBall from "./PokemonBall";

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(248, 248, 248);
    margin-bottom: 20px;
    border-radius: 10px;
`;

const H2 = styled.h2`
    margin-bottom: 20px;
    color: rgb(255, 0, 0);
`;

const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    width: 100%;
    justify-items: center;
`;

const Dashboard = ({ selectedPokemon }) => {
    const emptyPokemon = Array.from({ length: 6 - selectedPokemon.length }, () => 1);

    return (
        <DashboardContainer>
            <H2>나만의 포켓몬</H2>
            <Card>
                {selectedPokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={true} />
                ))}
                {emptyPokemon.map((element) => (
                    <PokemonBall key={element} />
                ))}
            </Card>
        </DashboardContainer>
    );
};

export default Dashboard;
