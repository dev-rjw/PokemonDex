import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const H2 = styled.h2`
    margin: 20px 0px;
    color: rgb(255, 0, 0);
`;

const P = styled.p`
    margin: 30px 0px;
`;

function PokemonDetail() {
    const [searchParams] = useSearchParams();
    const pokemonId = searchParams.get("id");
    const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

    const navigate = useNavigate();

    if (!pokemon) {
        return <div>포켓몬을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <img src={pokemon.img_url} alt={pokemon.korean_name} width="200px" />
            <H2>{pokemon.korean_name}</H2>
            <P>타입: {pokemon.types.join(", ")}</P>
            <P>{pokemon.description}</P>
            <button onClick={() => navigate("/dex")}>뒤로 가기</button>
        </div>
    );
}

export default PokemonDetail;
