import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(255, 0, 0);
    color: white;
    border: none;
    transition: background-color 0.3s;
`;

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <img src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" width="47%"></img>
            </div>
            <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
        </>
    );
}

export default Home;
