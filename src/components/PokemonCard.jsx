import styled from "styled-components";

const Card = styled.div`
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
`;

const P1 = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0px;
    color: black;
`;
const P2 = styled.p`
    font-size: 12px;
    color: rgb(102, 102, 102);
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
    return (
        <Card>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <P1>{pokemon.korean_name}</P1>
            <P2>No.{String(pokemon.id).padStart(3, "0")}</P2>
            {isSelected ? <Button onClick={() => onRemove()}>삭제</Button> : <Button onClick={() => onAdd()}>추가</Button>}
        </Card>
    );
}

export default PokemonCard;
