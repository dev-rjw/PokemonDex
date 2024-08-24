import styled from "styled-components";

const DashboardContainer = styled.div``;

const Dashboard = ({ selectedPokemon }) => {
    return (
        <DashboardContainer>
            <h2>나만의 포켓몬</h2>
            {selectedPokemon.length === 0 ? (
                <p>선택된 포켓몬이 없습니다.</p>
            ) : (
                <ul>
                    {selectedPokemon.map((pokemon) => (
                        <li key={pokemon.id}>{pokemon.korean_name}</li>
                    ))}
                </ul>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
