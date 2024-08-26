import styled from "styled-components";

const Card = styled.div`
    width: 100px;
    height: 100px;
    background-color: rgb(255, 255, 255);
    border: 2px dashed rgb(204, 204, 204);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const Img = styled.img`
    width: 50px;
    height: 50px;
`;

function PokemonBall() {
    return (
        <Card>
            <Img src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" />
        </Card>
    );
}

export default PokemonBall;
